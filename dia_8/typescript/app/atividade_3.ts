import leia =  require('readline-sync')

const setNumeros: Set<number> = new Set<number>

for (let i = 0; i < 10; i++) {
    const numero: number = leia.questionInt("Digite um numero: ");
    setNumeros.add(numero);
}
console.log("Lista de numeros nao repetidos: ")
for (const numero of setNumeros) {
    console.log(numero)
}