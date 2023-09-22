let num1 = parseFloat(prompt("digite um numero mané"));
let num2 = parseFloat(prompt("digite outro numero mané"));
let operação = prompt("vai ser , soma , subtração, mult, divisão ou potencia");
operação = operação.toUpperCase();

if(operação == "SOMA") {
    let result  = num1 + num2;
    alert (`o resultado será : ${result}`);
} else if (operação == "SUBTRAÇÃO") {
    const result = num1 - num2;
     alert (`o resultado sera ${result}`);
}   else if (operação == "MULT"){
    let result = num1 * num2;
    alert (`o resultado será ${result}`);
}   else if(operação == "DIVISÃO"){
    if (num2 == 0){
        alert("impossivel dividir por zero");
}else{
    let result = num1 / num2;
    alert (`o resultado sera ${result}`);}
}   else if (operação == "POTENCIA"){
    let result = num1 ** num2;
    alert (`o resultaado será ${result}`)
}    else{
    alert ( "operação invalida");
}