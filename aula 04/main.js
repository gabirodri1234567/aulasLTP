let cor = prompt("digite uma cor" );
cor = cor.toUpperCase();

console.log (cor.toUpperCase());
console.log(cor)

// o toUpperCase transforma a string para maiuscula
// o toLowerCase transforma a string para minuscula

if (cor == "VERMELHO"){
    alert ("pare!");
} else if (cor == "VERDE"){
    alert("ande filho");
} else if (cor == "AMARELO"){
    alert("atenção! se continuar vai dar ruim");
}else {
    alert ("cor invalida");
}