import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Image, StatusBar } from "react-native";
import Estilos, { corPrincipal, corSecundaria, corTexto, corFundo, corFundo2, corPlaceholder } from "./Estilos";
import { MaterialIcons } from '@expo/vector-icons';

const ListaCompras = () => {
    // variavel de estado para o item que irei adicionar a minha lista de compras
    const [item, setItem] = useState('');
    const [listaCompras, setListaCompras] = useState([
        { id: 1, produto: '1 Cartela de Ovos 🥚', comprado: false },
        { id: 2, produto: '2 Nikito de Chocolate🍪', comprado: true }
    ]);

    // funçao para desenhar os itens da minha lista de compras
    const exibirItens = ({ item }) => {
        return (
            <TouchableOpacity style={Estilos.botaoItem}>
                <Text style={Estilos.textoBotaoItem}>{item.produto}</Text>
                <MaterialIcons name='delete-outline' size={24} color={corPrincipal} />
            </TouchableOpacity>
        )
    }

    const botaoAdicionar = () => {
        // criando um novo objeto do produto que estou adicionando
        const novoItem = { id: Date.now(), produto: item, comprado: false }
        // criando uma nova lista, mantendo tudo que tenho da lista atual e acrescentando o novo item
        const novaLista = [...listaCompras, novoItem];
        // atribuo a nova lista a lista de compras que estou exibindo no app
        setListaCompras(novaLista);
        // limpando o campo de input
        setItem('');
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