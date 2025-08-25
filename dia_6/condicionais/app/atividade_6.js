import leia from 'readline-sync'

let nome, cargo, salario

nome = leia.question("Digite o nome do colaborador: ");
cargo = leia.questionInt("Escolha uma opcao de cargo: \n(1)Gerente \t(4)Motorista \n(2)Vendedor \t(5)Estoquista \n(3)Supervisor \t(6)Tecnico de TI\n")
salario = leia.questionFloat("Digite o salario do colaborador: ")

switch (cargo) {
    case 1:
        salario += 0.1 * salario
        console.log(`Nome do colaborador: ${nome}\nCargo: Gerente \nSalário: R$ ${salario}`)
        break;
    case 2:
        salario += 0.07 * salario
        console.log(`Nome do colaborador: ${nome}\nCargo: Vendedor \nSalário: R$ ${salario}`)
        break;
    case 3:
        salario += 0.09 * salario
        console.log(`Nome do colaborador: ${nome}\nCargo: Supervisor \nSalário: R$ ${salario}`)
        break;
    case 4:
        salario += 0.06 * salario
        console.log(`Nome do colaborador: ${nome}\nCargo: Motorista \nSalário: R$ ${salario}`)
        break;
    case 5:
        salario += 0.05 * salario
        console.log(`Nome do colaborador: ${nome}\nCargo: Estoquista \nSalário: R$ ${salario}`)
        break;
    case 6:
        salario += 0.08 * salario
        console.log(`Nome do colaborador: ${nome}\nCargo: Técnico de TI \nSalário: R$ ${salario}`)
        break;

    default:
        console.log(`Opção de cargo inválida`)
        break;
}