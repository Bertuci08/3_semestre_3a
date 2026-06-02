import { View, Text, TextInput, TouchableOpacity, Image, Switch } from 'react-native'
import { useState } from "react";
import { enderecoServidor } from '../utils'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { EstilosLogin, coresLogin } from '../styles/EstilosLogin'
import { MaterialIcons } from '@expo/vector-icons';
import { corFundo2, corPrincipal } from '../styles/Estilos'
import logo from '../../assets/logo.png'

export default function Login({ navigation }) {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [mensagem, setMensagem] = useState("")

    const [lembrar, setLembrar] = useState(false)
    const [mostrarSenha, setMostrarSenha] = useState(false)

    async function botaoEntrar() {
        try {
            if (email == '' || senha == '') {
                setMensagem("Preencha todos os campos")
                return
            }

            const dadosLogin = {
                email,
                senha
            }

            const resposta = await fetch(`${enderecoServidor}/login`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dadosLogin)
            })

            if (resposta.status == 404) {
                setMensagem(`Rota não encontrada: ${resposta.url}`)
                return
            }

            const dados = await resposta.json()

            if (resposta.status == 500) {
                setMensagem(`Erro no servidor: ${dados.message}`)
                return
            }

            if (resposta.ok) {
                await AsyncStorage.setItem("Usuario logado", JSON.stringify(dados))
                navigation.navigate('MenuDrawer')
            } else {
                setMensagem(`❌ Email ou Senha incorretos!`)
            }

        } catch (error) {
            setMensagem(`Erro ao realizar login: ${error.message}`)
        }
    }

    return (
        <View style={EstilosLogin.container}>
            <LinearGradient colors={[corPrincipal, corFundo2]} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} style={EstilosLogin.gradiente}>
                <View style={EstilosLogin.cabecalho}>
                    <Image source={require('../../assets/logo.png')} style={EstilosLogin.iconeLogo} />
                    <View>
                        <Text style={EstilosLogin.nomeApp}>FinanControl</Text>
                        <Text style={EstilosLogin.subtituloApp}>O Seu Controle Financeiro</Text>
                    </View>
                </View>

                <View style={EstilosLogin.conteudoPrincipal}>
                    <View style={EstilosLogin.formularioLogin}>
                        <Text style={EstilosLogin.titulo}>Acesse Sua conta</Text>
                        <View style={EstilosLogin.grupoInput}>
                            {/* EMAIL */}
                            <MaterialIcons name="email" size={22} style={EstilosLogin.iconeInput} />
                            <TextInput
                                style={EstilosLogin.input}
                                placeholder="Digite seu Email"
                                placeholderTextColor={coresLogin.placeholder}
                                autoCapitalize="none"
                                keyboardType="email-address"
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                            />
                        </View>


                        {/* SENHA */}
                        <View style={EstilosLogin.grupoInput}>
                            <MaterialIcons name="lock" size={22} style={EstilosLogin.iconeInput} />
                            <TextInput
                                style={EstilosLogin.input}
                                placeholder="Digite sua Senha"
                                placeholderTextColor={coresLogin.placeholder}
                                secureTextEntry={!mostrarSenha}
                                value={senha}
                                onChangeText={(text) => setSenha(text)}
                            />
                            {/* BOTAO DE VISUALIZAR */}
                            <TouchableOpacity style={EstilosLogin.alternarVisibilidade} onPress={() => setMostrarSenha(!mostrarSenha)}>
                                <MaterialIcons size={24} name={mostrarSenha ? "visibility" : "visibility-off"} style={EstilosLogin.iconeInput} />
                            </TouchableOpacity>
                        </View>

                        <View style={EstilosLogin.entreOpcoes}>
                            <View style={EstilosLogin.containerCheckbox}>
                                <Switch
                                    style={EstilosLogin.checkbox}
                                    value={lembrar}
                                    onValueChange={(value) => setLembrar(value)}
                                />
                                <Text style={EstilosLogin.rotuloCheckbox}>Lembrar-Me</Text>
                            </View>
                            <Text style={EstilosLogin.esqueceuSenha} onPress={() => navigation.navigate('EsqueceuSenha')}>
                                Esqueceu sua Senha?
                            </Text>
                        </View>

                        <TouchableOpacity style={EstilosLogin.botaoEntrar} onPress={botaoEntrar}>
                            <Text style={EstilosLogin.textoBotao}>Entrar</Text>
                        </TouchableOpacity>

                        <Text style={EstilosLogin.mensagemFeedback}>{mensagem}</Text>
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}
