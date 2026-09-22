const readlineSync = require("readline-sync")
let opcao = parseInt(readlineSync.question("Digite um número de 1 a 4: "))

switch(opcao){
    case 1:
        console.log("Cadastrar usuário")
        break
    case 2:
        console.log("Consultar usuário")
        break
    case 3:
        console.log("Alterar usuário")
        break
    case 4:
        console.log("Excluir usuário")
        break
    default:
        console.log("Opção inválida")
        break
}