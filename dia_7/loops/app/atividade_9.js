import leia from "readline-sync";

const matriz = [];
let diagonalPrincipalString = "";
let diagonalSecundariaString = "";
const diagonalPrincipal = [];
const diagonalSecundaria = [];
let somaPrincipal = 0;
let somaSecundario = 0;

for (let i = 0; i < 3; i++) {
  matriz[i] = [];
  for (let j = 0; j < 3; j++) {
    matriz[i][j] = leia.questionInt("Digite um numero para a matriz: ");
    if(i === j) {
      diagonalPrincipalString += matriz[i][j] + " ";
      diagonalPrincipal[i] = matriz[i][j];
      somaPrincipal += matriz[i][j];
    }
    if(j === 2 - i) {
      diagonalSecundariaString += matriz[i][j] + " ";
      diagonalSecundaria[i] = matriz[i][j];
      somaSecundario += matriz[i][j];
    }
  }
}

console.log("Elementos da Diagonal Principal: \n"+ diagonalPrincipalString);
console.log("Elementos da Diagonal Secundária:: \n"+ diagonalSecundariaString);
console.log("Soma dos Elementos da Diagonal Principal: \n"+ somaPrincipal);
console.log("Soma dos Elementos da Diagonal Secundária: \n"+ somaSecundario);