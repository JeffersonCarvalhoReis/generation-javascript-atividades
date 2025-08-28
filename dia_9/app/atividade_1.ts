import leia from 'readline-sync'
import { Queue } from '../queue'

const fila = new Queue<string>()
let opcao: number
do {
console.log(
`
**************************************************** 
*          1 - Adicionar Cliente na Fila           *
*          2 - Listar todos os Clientes            *
*          3 - Retirar Cliente da FIla             *
*          0 - Sair                                *
****************************************************
Entre com uma opção desejada: 
`
);

  opcao = leia.questionInt()
  switch (opcao) {
    case 1:
        let nome = leia.question("Escreva o proximo nome da lista: ")
        fila.enqueue(nome)
        console.log(`O Cliente ${nome} foi adicionado com sucesso`);
        
        break;
    case 2:
        if (!fila.isEmpty()) {
            console.log("Todos da Fila");
        
            fila.printQueue()
        } else {
            console.log("A fila está vázia");
            
        }

        break;
    case 3:
        if (!fila.isEmpty()) {
            console.log(`O Cliente ${fila.peek()} saiu da fila`)
            fila.dequeue()  
        } else {
            console.log("A fila está vázia");
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

