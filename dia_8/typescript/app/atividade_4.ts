import leia = require('readline-sync')

const numeros: Set<number> = new Set<number>([2,5,1,3,4,9,7,8,10,9])

const numeroDigitado = leia.questionInt("Digite um numero: ")

let encontrado = false

for (const numero of numeros) {
    if(numero === numeroDigitado) {
        encontrado = true
    }
}

if (encontrado) {
    console.log(`O número ${numeroDigitado} foi encontrado!`)
} else {
    console.log(`O número ${numeroDigitado} não foi encontrado!`);
    
}
