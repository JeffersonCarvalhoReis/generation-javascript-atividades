import leia = require('readline-sync')

const numeros: Array<number> = new Array<number>(2,5,1,3,4,9,7,8,10,6)

const numero: number = leia.questionInt("Digite um numero: ")

const posicao: number = numeros.indexOf(numero)
if(posicao !== -1) {
    console.log(`O número ${numero} está localizado na posição: ${posicao}`)
}else {
   console.log(`O número ${numero} não foi encontrado!`);
}