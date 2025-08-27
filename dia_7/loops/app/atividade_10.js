import leia from "readline-sync";

const matriz = [];
const media = [];
const soma = [];
let acc = 0;

for (let i = 0; i < 10; i++) {
  matriz[i] = [];
  for (let j = 0; j < 4; j++) {
    matriz[i][j] = leia.questionFloat(`Digite a nota ${j + 1} do aluno ${i + 1}: `);
    acc += matriz[i][j];
    soma[i] = acc;
  }
  acc = 0;
  media[i] = soma[i] / 4;
}
console.log(media);