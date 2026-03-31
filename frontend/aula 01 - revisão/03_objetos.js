let produto = {
    'nome': 'Iphone',
    'modelo': '17',
    'preco': 10000,
    'memória': 256
}

console.log(produto.preco);

let aluno = {
    "nome:": "Bertuci",
    "idade": 17,
    "turma": "3º A",
    "mae": {
        "nome": "Camila",
        "telefone": "18 9923232323"
    }
}
console.log(`${aluno.nome}`); // bertuci
console.log(`${aluno.mae.nome}`); // camila

// desestruturando um objeto
let nomeAluno = aluno.nome;
// let idade = aluno.idade;
// let turma = aluno.turma
// let mae = aluno.turma
let { idade, turma, mae } = aluno;

