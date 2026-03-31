const idade = 17;

if(idade >= 18){
    console.log("você já é de maior de idade");
}else if (idade >= 13 && idade <= 17){
    console.log("você é adolescente");
}else if (idade >= 1 && idade <= 12){
    console.log("você é uma criança");
}else{
    console.log("você é um bebê");
}


//operador ternario
let nota = 8;
let status;

if(nota >= 7){
    status = "Aprovado"
}else{
    status = "Reprovado"
}
let status2;
//condição?     Verdadeiro       :       Falso
nota >= 7 ? status2 = "Aprovado" : status2 = "Reprovado"
