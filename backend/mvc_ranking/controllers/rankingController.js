import Jogador from '../models/ranking.js'

let listaJogadores = [
    new Jogador(1, 'Bertuci', 1000),
    new Jogador(2, 'Amorim', 290),
    new Jogador(3, 'Fellipe', 250),
    new Jogador(4, 'Boldo', 200),
    new Jogador(5, 'Barreto', 190)
]

const rankingController = {
    listar: (req, res) => {
        listaJogadores.sort((a, b) => b.pontuacao - a.pontuacao);
        res.render('ranking.ejs', { jogadores: listaJogadores })
    },
    adicionar: (req, res) => {
        const { nome, pontuacao } = req.body;

        try {
            const novo = new Jogador(
                listaJogadores.length + 1,
                nome,
                Number(pontuacao)
            )
            listaJogadores.push(novo);
            res.redirect('/ranking');
        }
        catch (e) {
            res.status(400).render('ranking.ejs', { jogadores: listaJogadores, erro: e.message })

        }
    },

    adicionarPontos: (req, res) => {
        const { id } = req.body;
        const jogador = listaJogadores.find(l => l.id === Number(id));
        if (jogador) jogador.aumentarpontuacao();
        res.redirect('/ranking');
    }
}

export default rankingController;