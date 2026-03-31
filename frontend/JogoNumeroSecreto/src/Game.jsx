import { useState } from "react";
import { estilos } from "./GameEstilos";

const Game = () => {
    const [numeroSecreto, setNumeroSecreto] = useState(sortearNumero());
    const [chute, setChute] = useState('');
    const [mensagem, setMensagem] = useState('Adivinhe um número entre 1 e 100');
    const [tentativas, setTentativas] = useState(1);
    const [jogoFinalizado, setJogoFinalizado] = useState(false);


    function sortearNumero() {
        return Math.floor(Math.random() * 100) + 1;
    }

    const botaoChutar = () => {
        if (numeroSecreto == chute) {
            setMensagem(`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativas.`);
            setJogoFinalizado(true);
        } else if (numeroSecreto > chute) {
            setTentativas(tentativas + 1);
            setMensagem('O número secreto é maior que o chute.');
        } else {
            setMensagem('O número secreto é menor que o chute.');
        }
    }

    const botaoNovoJogo = () => {
        setNumeroSecreto(sortearNumero());
        setChute('');
        setMensagem('Adivinhe um número entre 1 e 100');
        setTentativas(1);
        setJogoFinalizado(false);
    }


return (
    <section style={estilos.container}>
        <div style={estilos.conteudo}>
            <div style={estilos.informacoes}>
                <div style={estilos.texto}>
                    <h1 style={estilos.h1}>Jogo do Número Secreto</h1>
                    <p style={estilos.mensagem}>{mensagem}</p>
                </div>
                <input type="number" style={estilos.chute} value={chute} onChange={(event) => setChute(event.target.value)} />
                <div style={estilos.botoes}>
                    <button style={estilos.botao} onClick={botaoChutar}>Chutar</button>
                    <button style={estilos.botao} onClick={botaoNovoJogo}>Novo Jogo</button>
                </div>
            </div>
            <img src="./img/ia.png" style={estilos.imagem} />
        </div>
    </section>
)
}

export default Game;