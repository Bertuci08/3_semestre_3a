import { useState, useEffect, use } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Image, StatusBar } from "react-native";
import Estilos, { corPrincipal, corSecundaria, corTexto, corFundo, corFundo2, corPlaceholder } from "./Estilos";
import { MaterialIcons } from '@expo/vector-icons';
import { firestore } from "../firebase.config";
import { collection, addDoc, getDocs, query, doc, updateDoc, deleteDoc, where, orderBy } from "firebase/firestore";

const ListaCompras = () => {
    // variavel de estado para o item que irei adicionar a minha lista de compras
    const [item, setItem] = useState('');
    const [listaCompras, setListaCompras] = useState([]);

    async function buscarDados() {
        // representa um SELECT * FROM COMPRAS
        const comando = query(collection(firestore, 'compras'));
        const dadosBD = await getDocs(comando);

        const novaLista = dadosBD.docs.map( (doc) => (
            {id: doc.id, ...doc.data()}
        ))

        setListaCompras(novaLista);
    }

    useEffect(() => {
        buscarDados();
    }, []);

    async function botaoAtualizar(item) {
        const docRef = doc(firestore, 'compras', item.id);
        await updateDoc(docRef, { comprado: !item.comprado });
        buscarDados();
    }


    async function botaoExcluir(id) {
        await deleteDoc(doc(firestore, 'compras', id));
        buscarDados();
    }


    // funçao para desenhar os itens da minha lista de compras
    const exibirItens = ({ item }) => {
        return (
            <TouchableOpacity style={Estilos.botaoItem} onPress={() => botaoAtualizar(item)} >
                <Text style={item.comprado == false ? Estilos.textoBotaoItem : Estilos.textoBotaoItemComprado}>
                    {item.produto}
                </Text>
                <MaterialIcons name='delete-outline' size={24} color={corPrincipal} onPress={() => botaoExcluir(item.id)} />
            </TouchableOpacity>
        )
    }

    const botaoAdicionar = async () => {
        // criando um novo objeto do produto que estou adicionando
        const novoItem = { produto: item, comprado: false }
        const docRef = await addDoc(collection(firestore, 'compras'), novoItem);
        console.log(docRef);

        // limpando o campo de input
        setItem('');
        buscarDados();
    }

    return (
        <View style={Estilos.conteudo}>
            <StatusBar backgroundColor={corFundo} barStyle='light-content' />
            <View style={Estilos.header}>
                <Image source={require('../assets/logo_lista_compras.png')} style={Estilos.logo} />
                <Text style={Estilos.titulo}>Lista de Compras</Text>
            </View>

            <View style={Estilos.corpo}>
                <View style={Estilos.inputContainer}>
                    <TextInput placeholder="Adicione um novo item de compra na lista"
                        style={Estilos.input}
                        value={item}
                        onChangeText={setItem}
                        placeholderTextColor={corPlaceholder}
                    />

                    <TouchableOpacity style={Estilos.botao} onPress={botaoAdicionar}>
                        <Text style={Estilos.textoBotao} >+</Text>
                    </TouchableOpacity>
                </View>

                {/* lista dos produtos */}
                <FlatList
                    // no atributo data enviamos o vetor de dados da lista
                    data={listaCompras}
                    // no atributo renderItem enviamos a função que desenha o item
                    renderItem={exibirItens}
                    // no atributo keyExtractor precisamos enviar um id unico
                    keyExtractor={item => item.id}
                />
            </View>

        </View>
    )
}

export default ListaCompras;