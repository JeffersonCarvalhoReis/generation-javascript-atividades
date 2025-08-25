import leia from 'readline-sync'

let n1, n2, operador

n1 = leia.questionFloat("Digite o primeiro numero: ")
n2 = leia.questionFloat("Digite o segundo numero: ")
operador = leia.questionInt("Escolha o operador: \n(1)Soma \t(3)Multiplicacao \n(2)Subtracao \t(4)Divisao\n")

switch (operador) {
    case 1:
        console.log(`Resultado da soma: ${n1 + n2}`)
        break;
    case 2:
        console.log(`Resultado da subtração: ${n1 - n2}`)
        break;
    case 3:
        console.log(`Resultado da multiplicação: ${n1 * n2}`)
        break;
    case 4:
        console.log(`Resultado da divisão ${n1 / n2}`)
        break;
    default:
        console.log(`Opção de operador inválida`)
        break;
}