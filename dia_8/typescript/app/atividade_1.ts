import leia = require('readline-sync')

const cores: Array<string> = new Array<string>();

for (let i = 0; i < 5; i++) {
  cores[i] = leia.question("Digite uma cor: ")
   
}
console.log("Lista de cores:");

for (const cor of cores) {
   console.log(cor)
}
const coresOdernadas: Array<string> = cores.sort();
console.log("Cores ordenadas: ");

for (const cor of coresOdernadas) {
   console.log(cor)
}