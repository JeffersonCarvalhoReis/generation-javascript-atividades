import leia from "readline-sync";

let tipo, deposito, saque, saldo = 1000;

tipo = leia.questionInt("Escolha um tipo de operacao: \n(1)Saldo \t(2)Saque \t(3)Deposito\n");

switch (tipo) {
    case 1:
        console.log(`Seu saldo atual é: R$ ${saldo}`);
        break;
    case 2:
        saque = leia.questionFloat("Digite o valor do saque: ");
        if (saque > saldo) {
            console.log("Saldo insuficiente");
        } else {
            saldo -= saque;
            console.log(`Seu novo saldo é: R$ ${saldo}`);
        }
        break;
    case 3:
        deposito = leia.questionFloat("Digite o valor do deposito: ");
        saldo += deposito; 
        console.log(`Seu novo saldo é: R$ ${saldo}`);
        break;
    default:
        console.log("Tipo de operação inválida");
        break;
}