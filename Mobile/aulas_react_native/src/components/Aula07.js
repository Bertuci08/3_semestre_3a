import React from "react";
import { View, Text } from 'react-native'
import Hr from "./Hr";
import * as Animar from 'react-native-animatable'

const Aula07 = () => {
    return(
        <View>
            <Text>Aula 07 - Estilos de Navegação Tabs e Animações</Text>
            <Text>Criando navegação por abas e aprendendo sobre animações</Text>
            <Hr />
            <Animar.Text animation='fadeInLeft' iterationCount={'infinite'}> Texto animado </Animar.Text>
            <Animar.Text animation='fadeInRight' iterationCount={'infinite'} > Texto animado </Animar.Text>
            <Animar.Text animation='fadeInUp' iterationCount={'infinite'} > Texto animado </Animar.Text>
            <Animar.Text animation='fadeInDown' iterationCount={'infinite'} > Texto animado </Animar.Text>
            <Animar.Text animation='fadeInLeft' delay={2000} iterationCount={'infinite'} > Texto animado com delay </Animar.Text>

            <Animar.Image source={require('../../assets/icon.png')} style={{ width: 100, height: 100 }} 
            animation='lightSpeedIn' iterationCount={'infinite'}  />
        </View>
    )
}

export default Aula07;