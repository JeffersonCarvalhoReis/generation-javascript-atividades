import leia from "readline-sync";

let salario, adicional, extras, descontos, liquido 

salario = leia.questionInt('Digite o salario: ')
adicional = leia.questionInt('Digite o adicional noturno: ')
extras = leia.questionInt('Digite o valor das horas extras: ')
descontos = leia.questionInt('Digite o desconto: ')

liquido = salario + adicional + (extras * 5)- descontos

console.log("Salario liquido: " + liquido);
