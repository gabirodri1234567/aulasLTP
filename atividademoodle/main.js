


//exercicio 1
while (true) {
    const nota = parseFloat(prompt("digite uma nota de zero a dez"));
     
    if( nota>= 0 && nota <=10){
        alert("nota valida"+ nota);
         break;
    }else{
        alert("invalido querido. a nota deve estar entre zero a dez");
    }   
}

2 while (true){
    let usuario = prompt("Digite seu nome de usuário:");
    const senha = prompt("Digite sua senha:");

    if(usuario === senha){
        alert ("erro, tente mais uma vez ")
    }else {
        alert ("bem vinda(o)")
    }   break;
}



//3Faça um programa que leia e valide as seguintes informações

let nome = prompt("digite seu nome (maior que 3 caracteres)")

while(nome.length <= 3){
   nome= prompt("nome invalido (deve ser meior não menor ");
}

let idade = parseInt(prompt("digite a sua idade (entre 0 até 150)"));

while (idade < 0 || idade > 150){
idade= parseInt(prompt("idade ivalida (deve ser entre 0 até 150)"));
}

let salario = parseFloat(prompt("qual o seu salario ? (maior que zero)"));

while(salario <= 0){
    salario= parseFloat(prompt("Erro(salario deve ser maior que zero colega"));
}

let sexo = prompt("digite como se identifica (f) ou (m)");

while(sexo != "f" && sexo != "m" ){
  sexo=   parseInt(prompt("erro , deve deve ser f ou m "));
}

let estadocivil = prompt("vc é s, c, d ,v")

while(estadocivil !== "s" && estadocivil !== "c" && estadocivil !== "d" && estadocivil !== "v"){
 estadocivil= prompt("está errado deve ser s, c, d , v ")
}

alert ("informações validas");
alert("nome"+ nome);
alert("idade" + idade);
alert("salario"+ salario);
alert("sexo"+ sexo);
alert("estadocivil"+ estadocivil);*/


//8)Faça um programa que leia 5 números e informe a soma e a média dos números

let soma = 0

for(let i = 1 ; i <= 5 ; i++) {
    let num = parseFloat(prompt(`digite um numero ${i}`))

    if(!isNaN(num)){
        soma += num;
    }else{
        alert("numero n correspondio, tente novamente");
        i--;
    }
}



let media = soma/5 

alert( `a soma dos numeros  sera ${soma}`);
alert(`a media dosnumeros será ${media}` );

