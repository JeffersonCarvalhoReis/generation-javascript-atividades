import leia from "readline-sync";

let numero = 0, soma = 0;

do {
  numero = leia.questionInt("Digite um numero: ");
  if (numero > 0) {
    soma += numero;
  }
} while (numero !== 0);

console.log(`A soma dos números de ${soma}`);