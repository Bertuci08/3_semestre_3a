import { View, Text, FlatList } from "react-native";
import Hr from "./Hr";
import Aula03_Exercicio from "./Aula03_Exercicio";
import Aula03_Exercicio2 from "./Aula03_Exercicio2";

const Aula03 = () => {
    // defininindo um vetor de turmas como fonte de daods para lista
    const turmas = [
        { id: 1, turma: "3º A", pg: 100 },
        { id: 2, turma: "1º A", pg: 30 },
        { id: 3, turma: "3º B", pg: 0 }
    ]

    const exibirItensLista = ({ item }) => {
        return (
            <Text>{item.turma}</Text>
        )
    }

    const exibirItensListaInterclasse = ({ item }) => {
        return (
            <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
            <Text>{item.id}º</Text>
            <Text>Turma: {item.turma}</Text>
            <Text>Pontos: {item.pg}</Text>
            </View>
        )
    }

    return (
        <View>
            <Hr />
            <Text>Aula 03 - Listas com FlatList</Text>
            <Text> Aprendendo a manipular listas em React Native</Text>
            <Hr />
            <Text>Lista de turmas:</Text>
            {
                turmas.map((item) => (
                    <Text key={item.id}>{item.turma}</Text>
                ))
            }
            <Text>Lista de turmas usando FlatList:</Text>
            {/* componente FlatList para exibir dados. Este componente é mais otimizado e eficiente para exibição de listas */}
            <FlatList
                data={turmas} // passando o vetor de turmas para o FlatList como props 
                renderItem={exibirItensLista} // função que "desenha" os itens
                keyExtractor={(item) => item.id} // função que gerencia as chaves únicas da lista
            />
            <Hr />
            {/* classificação do interclasse do SESI utilizando FlatList */}
            <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>
                Interclasse SESI 2026
            </Text>
            <FlatList
                data={turmas}  
                renderItem={exibirItensListaInterclasse} 
                keyExtractor={(item) => item.id} 
            />


            <Aula03_Exercicio />
            <Aula03_Exercicio2 />
        </View>
    )
}

export default Aula03;