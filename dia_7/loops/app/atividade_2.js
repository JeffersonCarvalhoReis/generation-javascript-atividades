import leia from "readline-sync";

let par = 0, impar = 0;
const numeros = [];

for (let i = 1; i <= 10; i++) {
  numeros[i] = leia.questionInt(`Digite o ${i} numero: `);
  if (numeros[i] % 2 === 0) {
    par++;
  }else {
    impar++;
  }
}
console.log(`Total de números pares: ${par} \nTotal de números impares ${impar}`);
