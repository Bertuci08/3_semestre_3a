import { View, Text, FlatList } from 'react-native'
import Hr from './Hr'

const Aula03_Exercicio = () => {
    
    const boletim = [
        { id: 1, aluno: "Gabriel Bertuci", materia: "Matemática", media: 10.0, faltas: 5 },
        { id: 2, aluno: "Gabriel Bertuci", materia: "Português", media: 9.5, faltas: 3 },
        { id: 3, aluno: "Gabriel Bertuci", materia: "História", media: 8.7, faltas: 2 },
        { id: 4, aluno: "Gabriel Bertuci", materia: "Geografia", media: 9.0, faltas: 4 },
        { id: 5, aluno: "Gabriel Bertuci", materia: "Ciências", media: 9.8, faltas: 6 },
        { id: 6, aluno: "Gabriel Bertuci", materia: "Inglês", media: 10.0, faltas: 1 },
        { id: 7, aluno: "Gabriel Bertuci", materia: "Educação Física", media: 10.0, faltas: 0 },
        { id: 8, aluno: "Gabriel Bertuci", materia: "SENAI", media: 10.0, faltas: 0 },
    ]

    const exibirItensListaBoletim = ({ item }) => {
        return (
            <View style={{ padding: 10, flexDirection: "row", justifyContent: "space-between" }}>
                <Text>id: {item.id}</Text>
                <Text>Aluno: {item.aluno}</Text>
                <Text>Matéria: {item.materia}</Text>
                <Text>Média: {item.media}</Text>
                <Text>Faltas: {item.faltas}</Text>
            </View>
        )
    }

    return (
        <View>
            <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>
                Boletim Escolar - 3º A 
            </Text>
            <FlatList
                data={boletim}  
                renderItem={exibirItensListaBoletim}
            />
        </View>
    )
}

export default Aula03_Exercicio;