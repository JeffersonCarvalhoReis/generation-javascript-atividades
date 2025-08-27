import leia from "readline-sync";

let numero, par, negativo;

numero = leia.questionInt("Digite o seu numero: ");

par = numero % 2 == 0;
negativo = numero < 0;

if (par && numero !==0) {
   if (negativo) {
    console.log(`O Número ${numero} é par e negativo`);
   } else {
    console.log(`O Número ${numero} é par e positivo`);
   } 
} else if (numero !== 0){
     if (negativo) {
    console.log(`O Número ${numero} é impar e negativo`);
   } else {
    console.log(`O Número ${numero} é impar e positivo`);
   }  
} else {
    console.log("Seu Número é Zero");    
}
