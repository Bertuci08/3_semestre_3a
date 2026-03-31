import { Link, useParams } from "react-router-dom";

function Filmes () {
    const { id } = useParams();

    return (
        <div>
            <h1>Filmes</h1>
            <p>Exibindo dados do filme: {id}</p>
            <Link to="/">Voltar para a página Principal</Link>
        </div>
    );
}

export default Filmes;