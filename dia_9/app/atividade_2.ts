import leia from 'readline-sync'
import { Stack } from '../stack';

const pilha = new Stack<string>()
let opcao: number
do {
console.log(
`
**************************************************** 
*          1 - Adicionar Livro na pilha            *
*          2 - Listar todos os Livros              *
*          3 - Retirar Livro da Pilha              *
*          0 - Sair                                *
****************************************************
Entre com uma opção desejada: 
`
);

  opcao = leia.questionInt()
  switch (opcao) {
    case 1:
        let livro = leia.question("Digite o nome do livro: ")
        pilha.push(livro)
        console.log(`O livro ${livro} foi adicionado com sucesso`);
        
        break;
    case 2:
        if (!pilha.isEmpty()) {
            console.log("Todos da pilha");
        
            pilha.printStack()
        } else {
            console.log("A pilha está vázia");
            
        }

        break;
    case 3:
        if (!pilha.isEmpty()) {
            console.log(`O livro ${pilha.peek()} foi retirado da pilha`)
            pilha.pop()  
        } else {
            console.log("A pilha está vázia");
        }
        break;
     case 0:
        console.log("Programa finalizado")
        break;
         
    default:
        console.error("Opção inválida")
        break;
  }
  
} while (opcao !== 0);

