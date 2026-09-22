const readlineSync = require("readline-sync")
let nomeCliente = readlineSync.question("Digite o nome do cliente: ")
let opcaoPlano = Number(readlineSync.question("Digite o número do plano: \n 1 - Básico \n 2 - Intermediário \n 3 - Avançado \n 4 - Premium \n"))

switch(opcaoPlano){
    case 1:
        console.log(nomeCliente + ", o plano escolhido foi o " + opcaoPlano + " Básico = R$ 39,90")
        break
    case 2:
        console.log(nomeCliente + ", o plano escolhido foi o " + opcaoPlano + " Intermediário = R$ 59,90")
        break
    case 3:
        console.log(nomeCliente + ", o plano escolhido foi o " + opcaoPlano + " Avançado = R$ 79,90")
        break
    case 4:
        console.log(nomeCliente + ", o plano escolhido foi o " + opcaoPlano + " Premium = R$ 99,90")
        break
    default:
        console.log("🛑 Opção inválida!")
        break
}