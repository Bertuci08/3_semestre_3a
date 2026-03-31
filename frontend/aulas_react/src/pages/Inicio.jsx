import { Link } from "react-router-dom";

function Inicio () {
    return (
        <div>
            <h1>Bem-vindo</h1>
            <Link to="/detalhes">Ir para a página Detalhes</Link>
        </div>
    );
}

export default Inicio;