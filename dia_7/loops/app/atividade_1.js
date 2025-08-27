import leia from "readline-sync";

const n1 = leia.questionInt("Digite um numero: ");
const n2 = leia.questionInt("Digite um numero maior do que o primeiro: ");

if (n1 > n2) {
  console.log("Intervalo inválido!");
} else {
  for (let index = n1; index < n2; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log(`${index} é mútiplo de 3 e 5`);
    }
  }
}