import { Link } from "react-router-dom";

function NotFound () {
    return (
        <div>
            <h1>404 - Página Não Encontrada</h1>
            <Link to="/">Voltar para a página Principal</Link>
        </div>
    );
}

export default NotFound;