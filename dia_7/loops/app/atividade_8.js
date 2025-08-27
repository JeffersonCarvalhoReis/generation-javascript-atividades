import leia from "readline-sync";

const numeros = [];
let pares = "";
let impares = "";
let soma = 0;

for (let i = 0; i < 10; i++) {
  numeros[i] = leia.questionInt(`Digite o numero ${i + 1}: `);
  if (numeros[i] % 2 === 0) {
    pares += numeros[i] + " ";
  }
  if(i % 2 === 1) {
    impares += numeros[i] + " ";
  }
  soma += numeros[i];
}
const media = soma / 10;
console.log("Elementos nos índices ímpares: \n"+ impares);
console.log("Elementos pares: \n"+ pares);
console.log("Soma: "+ soma);
console.log("Média: "+ media);