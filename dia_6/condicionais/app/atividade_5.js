import leia from "readline-sync";

let produto, qtd, precoTotal;

produto = leia.questionInt("Escolha uma opcao: \n(1)Cachorro-Quente \t(4)Bauru \n(2)X-Salada \t\t(5)Refrigerante \n(3)X-Bacon \t\t(6)Suco de laranja\n");
qtd = leia.questionInt("Escolha a quantidade que voce deseja: ");

switch (produto) {
    case 1:
        precoTotal = 10 * qtd;
        console.log(`Produto: Cachorro Quente - qtd: ${qtd}\nValor: R$ ${precoTotal}`);
        break;
    case 2:
        precoTotal = 15 * qtd;
        console.log(`Produto: X-Salada - qtd: ${qtd}\nValor: R$ ${precoTotal}`);
        break;
    case 3:
        precoTotal = 18 * qtd;
        console.log(`Produto: X-Bacon - qtd: ${qtd}\nValor: R$ ${precoTotal}`);
        break;
    case 4:
        precoTotal = 12 * qtd;
        console.log(`Produto: Bauru - qtd: ${qtd}\nValor: R$ ${precoTotal}`);
        break;
    case 5:
        precoTotal = 8 * qtd;
        console.log(`Produto: Refrigerante - qtd: ${qtd}\nValor: R$ ${precoTotal}`);
        break;
    case 6:
        precoTotal = 13 * qtd;
        console.log(`Produto: Suco de laranja - qtd: ${qtd}\nValor: R$ ${precoTotal}`);
        break;

    default:
        console.log("Opção de produto inválido");
        break;
}