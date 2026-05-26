import { View, Text, Button, TextInput } from 'react-native'
import { useState } from "react";
import { enderecoServidor } from '../utils'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login ({navigation}) {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [mensagem, setMensagem] = useState("")

        async function botaoEntrar() {  
            try {
                if (email == '' || senha == '') {
                    setMensagem("Preencha todos os campos")
                    return    // sai da função, não executa o restante do código
                }
    
                const login = {
                    "email": email,
                    "senha": senha
                }
    
                const resposta = await fetch(`${enderecoServidor}/login`, {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(login)
                })
                if (resposta.status == 404){
                    setMensagem(`Rota não encontrada: ${resposta.url}`)
                    return
                }
                const dados = await resposta.json()
                if (resposta.status == 500){
                    setMensagem(`Erro no servidor: ${dados.message}`)
                    return
                }
                if (resposta.ok) {
                    AsyncStorage.setItem("Usuario logado", JSON.stringify(dados))
                    navigation.navigate('MenuDrawer')
                } else {
                    setMensagem(`❌ Email ou Senha incorretos!`)
                }
    
            } catch (error) {
                setMensagem(`Erro ao realizar login: ${error.message}`)
            }
        }

    return (
        <View>
            <Text>Tela de login</Text>
            <Text>Email</Text>
            <TextInput type="email" placeholder="Digite seu email" value={email} onChangeText={setEmail} />

            <Text>Senha</Text>
            <TextInput type="password" placeholder="Digite sua senha" value={senha} onChangeText={setSenha} />

            <Button onPress={botaoEntrar} title='Entrar' />
            <Text style={{ color: "#f00" }}>{mensagem}</Text>
        </View>
    )
}