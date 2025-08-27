import leia from "readline-sync";

const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
const numero = leia.questionInt("Digite o numero que deseja encontrar: ");
let encontrado = false, posicao;

for (let index = 0; index < vetor.length; index++) {
  if (vetor[index] === numero) {
    encontrado = true;
    posicao = index;
  }

}
if (encontrado) {
  console.log(`O número ${numero} está localizado na posição: ${posicao}`);
} else {
  console.log(`O número ${numero} não foi encontrado!`);

}