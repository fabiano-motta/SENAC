const readlineSync = require("readline-sync")
let nomeCliente = readlineSync.question("Digite o nome do cliente: ")
let saldoConta = Number(readlineSync.question("Digite o saldo da conta: "))
let menu = Number(readlineSync.question("Digite a opção desejada. \n 1 - Consultar saldo \n 2 - Depositar \n 3 - Sacar \n 4 - Sair \n -> "))

switch(menu){
    case 1:
        console.log("Opção " + menu + "\n Saldo em conta: " + saldoConta.toFixed(2))
        break
    case 2:
        console.log("Opção " + menu + "\n Depósito")
        let deposito = Number(readlineSync.question("Digite o valor: "))
        saldoConta = saldoConta + deposito
        console.log("Novo saldo em conta: " + saldoConta.toFixed(2))
        break
    case 3:
        console.log("Opção " + menu + "\n Saque")
        let saque = Number(readlineSync.question("Digite o valor do saque: "))
        if (saque > saldoConta){
            console.log(nomeCliente + "\n🛑 Não há saldo suficiente")
        } else
            saldoConta = saldoConta - saque
            console.log(nomeCliente + "\nNovo saldo em conta: " + saldoConta.toFixed(2))
        break
    case 4:
        console.log("Opção " + menu + "\n Sair \n👋 " + nomeCliente)
        break
    default:
        console.log(nomeCliente + " 🛑 Opção inválida")
        break
}
