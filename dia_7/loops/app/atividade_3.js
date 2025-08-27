import leia from "readline-sync";

let menorQue21 = 0, maiorQue50 = 0, idade;

while (true) {
  idade = leia.questionInt("Digite uma idade: ");

  if(idade < 0) {
    break;
  }
  if (idade < 21) {
    menorQue21++;
  }
  if (idade > 50) {
    maiorQue50++;
  }
}
console.log(`Total de pessoas menores de 21 anos: ${menorQue21} \nTotal de pessoas maiores de 50 anos: ${maiorQue50} `);
