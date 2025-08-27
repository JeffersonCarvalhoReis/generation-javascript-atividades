import leia from "readline-sync";

let numero = 0, soma = 0, total = 0, media;

do {
  numero = leia.questionInt("Digite um numero: ");
  if (numero !== 0 && numero % 3 === 0) {
    soma += numero;
    total++;
  }
  media = soma / total;
} while (numero !== 0);

console.log(`A média dos números múltiplos de 3 é: ${media}`);