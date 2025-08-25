import leia from 'readline-sync'

let nome, idade, primeiraVez

nome = leia.question("Digite o nome do doador: ");
idade = leia.questionInt("Digite a idade do doador: ");

if (!(idade >= 18 && idade <= 69) ) {
    console.log(`${nome} não está apto para doar sangue!`);
} else if (idade >= 60) {
    primeiraVez = leia.question("Primeira doacao de sangue? (sim ou nao) ");
    primeiraVez = primeiraVez === 'sim' 
    if (primeiraVez) {
        console.log(`${nome} não está apto para doar sangue!`);
    } else {
        console.log(`${nome} está apto para doar sangue!`);
    }
} else {
    console.log(`${nome} está apto para doar sangue!`);
}

