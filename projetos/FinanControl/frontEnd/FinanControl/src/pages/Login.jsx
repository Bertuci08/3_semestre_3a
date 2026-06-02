import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { enderecoServidor } from '../utils'

import { MdEmail, MdLock, MdVisibility, MdVisibilityOff } from 'react-icons/md'
import { EstilosLogin } from "../styles/EstilosLogin";
import logo from '../assets/logo.png'

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [mensagem, setMensagem] = useState("")

    const [lembrar, setLembrar] = useState(false)
    const [mostrarSenha, setMostrarSenha] = useState(false)

    async function botaoEntrar(event) {
        event.preventDefault()

        try {
            if (email == '' || senha == '') {
                setMensagem("Preencha todos os campos")
                return    // sai da função, não executa o restante do código
            }

            const dadosLogin = {
                "email": email,
                "senha": senha
            }

            const resposta = await fetch(`${enderecoServidor}/login`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dadosLogin)
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
                localStorage.setItem("Usuario logado", JSON.stringify(dados))
                navigate('/principal')
            } else {
                setMensagem(`❌ Email ou Senha incorretos!`)
            }

        } catch (error) {
            setMensagem(`Erro ao realizar login: ${error.message}`)
        }
    }

    return (
        <div style={EstilosLogin.container}>
            <header  style={EstilosLogin.cabecalho}>
                <img src={logo} style={EstilosLogin.iconeLogo} />
                <div> 
                    <h1 style={EstilosLogin.nomeApp}>FinanControl</h1>
                    <p style={EstilosLogin.subtituloApp}>O Seu Controle Financeiro</p>
                </div>  
            </header>
            {/* EMAIL */}
            <main style={EstilosLogin.conteudoPrincipal}>
                <form style={EstilosLogin.formularioLogin}>
                    <h2 style={EstilosLogin.titulo}>Acesse Sua conta</h2>
                    <div style={EstilosLogin.grupoInput}>
                        <MdEmail style={EstilosLogin.iconeInput} />
                        <input style={EstilosLogin.input} type="email" placeholder="Digite seu Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    {/* SENHA */}
                    <div style={EstilosLogin.grupoInput}>
                        <MdLock style={EstilosLogin.iconeInput} />
                        <input style={EstilosLogin.input} type={mostrarSenha ? "text" : "password"} placeholder="Digite sua Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                        <button style={EstilosLogin.alternarVisibilidade} type="button" onClick={() => setMostrarSenha(!mostrarSenha)}>
                            {mostrarSenha == false ? <MdVisibilityOff /> : <MdVisibility />}
                        </button>
                    </div>

                    {/* LEMBRAR SENHA */}
                    <div style={EstilosLogin.entreOpcoes}>
                        <div style={EstilosLogin.containerCheckbox}>
                            <input type="checkbox" style={EstilosLogin.checkbox} />
                            <label style={EstilosLogin}>Lembrar-Me</label>
                        </div>
                        <a href="#" style={EstilosLogin.esqueceuSenha}>Esqueceu sua Senha?</a>
                    </div>

                    {/* BOTÃO ENTRAR */}
                    <button style={EstilosLogin.botaoEntrar} type="submit" onClick={botaoEntrar}>
                        Entrar
                    </button>

                    <p style={EstilosLogin.mensagemFeedback}>{mensagem}</p>
                </form>
            </main> 
            
        </div>
    )
}   