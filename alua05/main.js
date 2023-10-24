/*let val1=parseInt(prompt("qual a sua dade "));
let val2 = prompt("já tem habilitação");

if(val1 >=18){
   if(val2 == "sim"){
    alert("pode dirigir");
    }  else{
    alert("pode não fio ")
    }
}else if (val1 <18){
    alert("não pode")
*/

/*
Portas logicas

NOT (!=)  -> porta de negação , ou seja , nego uma condição,
2 != 3   (dois é diferente de 3? (vai ser true))
2 != 3 => true
5 != 5 => false ( pergunta 5 é diferente de 5?)


AND (&&) -> porta and , precisa que todas as condições sejam veradeiras para retornar true
ex : 
    nota =7
    freq = 70
    nota seja maior ou igual >= 7 && freq >=75 -> False (no passo)

    nota >= 7 && freq >= 50 -> true

    OR(||) -> porta OR, precisa que pelo menos uma condição seja verdadeira (TRUE)
    ex:
         nota = 7
         freq = 56
         nota >= 7 || freq >= 70 -> (true)
         nota >= 10 || freq >= 80 -> false 
*/
/*if(val1 >= 18 && val2 == 'Sim'){
    alert("Pode dirigir");
} else {
    alert("Não pode dirigir");
}*/


let vaa1 = prompt("vc é gestante , idoso ou PCD?")
vaa1= vaa1.toUpperCase()
    
if(vaa1 == "GESTANTE" || vaa1 == "IDOSO"|| vaa1 == "PCD") {
    alert ("estacione em vaga preferencial");
}else {
    alert(" não estacione aq fdp");
}





