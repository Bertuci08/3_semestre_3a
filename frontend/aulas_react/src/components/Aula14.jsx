import { estilos } from "../style/Estilos";
import { Link, useNavigate } from "react-router-dom";

const Aula14 = () => {
    const navigate = useNavigate();


    return (
        <div style={estilos.cardAula}> 
            <h2>Aula 14 - React Router - Navegação em React</h2>
            <h3>Biblioteca que permite criar e gerenciar rotas em React</h3>
            <hr />
            <h3>Navegação com Link</h3>
            <Link to="/">Ir para a página Principal</Link>
            <br />
            <Link to="/sobre">Ir para a página Sobre</Link>
            <br />
            <Link to="/blablabla">Página não encontrada</Link>
            <br />
            <h3>Navegação com programação utilizando o useNavigate</h3>
            <button onClick={() => navigate("/")}>
                Ir para a página Principal
            </button>
            <br />
            <button onClick={() => navigate("/sobre")}>
                Ir para a página Sobre
            </button>
            <br />
            <button onClick={() => navigate("/blablabla")}>
                Página não encontrada
            </button>
            <hr />
            <h3>Rotas dinâmicas / Rotas com parâmetros (useParams)</h3>
            <button onClick={() => navigate("/perfil/Bertuci")}> Perfil do Bertuci</button>
            <button onClick={() => navigate("/perfil/Amorim")}> Perfil da Amorim</button>
            <hr />
            <h3>Exercicios</h3>
            <button onClick={() => navigate("/contato")}> Entrar em contato</button>
            <button onClick={() => navigate("/detalhes")}> Ver detalhes</button>
            <button onClick={() => navigate("/inicio")}> Ir para a página Início</button>
            <hr />
            <button onClick={() => navigate("/filmes/10")}> Ver detalhes do filme 10</button>
        </div>
    )
}

export default Aula14