import leia from "readline-sync";

let n1, n2, n3, n4, resultado 

n1 = leia.questionInt('Digite primeiro numero: ')
n2 = leia.questionInt('Digite segundo numero: ')
n3 = leia.questionInt('Digite terceiro numero: ')
n4 = leia.questionInt('Digite quarto numero: ')

resultado = (n1 * n2) - (n3 * n4) 

console.log("Resultado: " + resultado);
