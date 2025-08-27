import leia from "readline-sync";

const idade = [], genero = [], pessoa = [];
let continuar = true;
let i = 0;
let devBackend = 0, mulheresFront = 0, homensMobileMaiorQue40 = 0, nBinarioFullMenorQue30 = 0, total = 0, media = 0, anosTotais = 0;

while(continuar) {
  i++;
  idade[i] = leia.questionInt("Digite a idade: ");
  genero[i] = leia.questionInt("[1] - Mulher Cis \t[4] - Mulher Trans \n[2] - Homem Cis \t[5] - Homem Trans \n[3] - Nao Binario \t[6] - Outros \n");
  pessoa[i] = leia.questionInt("[1] - Backend \t[3] - Mobile \n[2] - Frontend \t[4] - FullStack \n");

  if(pessoa[i] === 1) {
    devBackend++;
  }

  if((genero[i] === 1 || genero[i] === 4) && pessoa[i] === 2) {
    mulheresFront++;
  }

  if((genero[i] === 2 || genero[i] === 5) && pessoa[i] === 3 && idade[i] > 40) {
    homensMobileMaiorQue40++;
  }

  if(genero[i] === 3 && pessoa[i] === 4 && idade[i] < 30) {
    nBinarioFullMenorQue30++;
  }

  total++;
  anosTotais += idade[i];
  media = anosTotais / total;
  continuar = !leia.keyInYN("Deseja sair?");

}

console.log(`Total de pessoas desenvolvedoras Backend: ${devBackend}`);
console.log(`Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${mulheresFront}`);
console.log(`Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${homensMobileMaiorQue40}`);
console.log(`Total de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos: ${nBinarioFullMenorQue30}`);
console.log(`O número total de pessoas que responderam à pesquisa: ${total}`);
console.log(`A média de idade das pessoas que responderam à pesquisa: ${media}`);

