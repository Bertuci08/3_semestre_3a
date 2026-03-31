import { Link } from "react-router-dom";

function Detalhes () {
    return (
        <div>
            <h1>Detalhes</h1>
            <Link to="/contato">Voltar para a página Contato</Link>
        </div>
    );
}

export default Detalhes;