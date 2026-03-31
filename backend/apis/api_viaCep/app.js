import express from 'express';

const app = express();

app.get('/', async (req, res) => {
    res.status(200).json('API Funcionando')
});
// criando um novo endpoint para consumir dados da Api ViaCep
app.get('/cep/:codigo', async (req, res) => {
    const codigo = req.params.codigo;
    // o metodo fetch é o mensagero que vai ate a outa api e tras a resposta
    const resposta = await fetch(`https://viacep.com.br/ws/${codigo}/json/`);
    const dados = await resposta.json();
    res.status(200).json(dados);
})



const porta = 3000;
app.listen(porta, () => {
    console.log(`http://localhost:${porta}`);
});