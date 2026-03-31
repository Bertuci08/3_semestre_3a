// função nomeada
function saudacao(nome){
    console.log(`Tenha um bom dia ${nome}`);
}
// chamando a função nomeada
saudacao('Bertuci')

// função anonima
const saudacao2 = function (nome){
    console.log(`Tenha um bom dia ${nome}`);
}
saudacao2('Amorim')



// crie uma função nomeada de somar 2 números 
function soma(n1, n2){
    let resultado = n1 + n2
    console.log(resultado);
}
soma(1, 1)


// transforme em anonima
const soma2 = function(n3, n4){
    let resultado1 = n3 + n4
    console.log(resultado1);
}
soma2(2 , 2)