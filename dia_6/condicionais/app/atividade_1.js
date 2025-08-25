import leia from 'readline-sync'

let a, b, c, soma

a = leia.questionInt("Digite o numero A: ")
b = leia.questionInt("Digite o numero B: ")
c = leia.questionInt("Digite o numero C: ")

soma = a + b
if (soma > c) {
   console.log("A Soma de A + B é Maior do que C"); 
} else if(soma < c) {
    console.log("A Soma de A + B é Menor do que C");
} else {
    console.log("A Soma de A + B é igual a C");  
}
