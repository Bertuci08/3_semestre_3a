import { useState } from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Logo from '../../assets/icon.png';
import { LinearGradient } from 'expo-linear-gradient';
import Aula02_FlexBox from './Aula02_FlexBox';



const Aula02 = () => {
    const [nome, setNome] = useState("");

    return (
        <View>
            <Text>----------------------------------------------------------------------------</Text>
            <Text>Aula 02 - Componentes Basicos</Text>
            <Text>Conhecendo os principais componentes do React Native</Text>

            {/* inserindo imagem da internet */}
            <Image source={{ uri: "https://picsum.photos/300/200" }} style={{ width: 300, height: 200 }} />

            {/* inserindo uma imgem diretamente do caminho do arquivo */}
            <Image source={require('../../assets/icon.png')} style={{ width: 50, height: 50 }} />

            {/* inserindo imagem referenciando como componente */}
            <Image source={Logo} style={{ width: 50, height: 50 }} />

            <TextInput
                placeholder="Digite seu nome"
                style={{ borderWidth: 1, borderColor: 'black', padding: 10, marginBottom: 10 }}
                onChangeText={setNome}
            />
            <Text>Seu nome é {nome}</Text>
            {/* botao com poucas possibilidades de estilização */}
            <Button title='Clique aqui' onPress={() => console.log({ nome })} />

            {/* Botão com controle total de estilização */}
            <TouchableOpacity onPress={() => console.log({ nome })}
                style={estilos.botao}>

                <Image source={Logo} style={{ width: 50, height: 50 }} />

                <Text style={estilos.botaoTexto}>Botão TouchableOpacity</Text>
            </TouchableOpacity>

            <LinearGradient colors={['blue', 'red', 'black']} style={{height: 50, padding: 10}}>

            </LinearGradient>



        <Aula02_FlexBox />
        </View>
    )
}

// utilizamos o styleSheet do React Native para que ele converta a estilização para o padrão dos componente nativos 
const estilos = StyleSheet.create({
    botao: { padding: 12, borderRadius: 8, alignItems: 'center', backgroundColor: 'blue' },
    botaoTexto: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
})


export default Aula02;