import { View, Text, StyleSheet } from 'react-native';

export default function Aula02_FlexBox() {
    return (
        <View style={estilos.conteudo}>
            <Text style={estilos.caixa}>1</Text>
            <Text style={estilos.caixa}>2</Text>
            <Text style={estilos.caixa}>3</Text>
        </View>

    )
}

const estilos = StyleSheet.create({
    conteudo: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'blue',
        height: 100
    },
    caixa: {
        width: 50,
        height: 50,
        backgroundColor: 'lightblue',
        textAlign: "center",
        lineHeight: 50
    }
})