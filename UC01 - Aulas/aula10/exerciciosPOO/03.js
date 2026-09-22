const readlineSync = require("readline-sync")

class ContaBancaria {
    constructor(nomeTitular, numeroConta, saldoIncial) {
        this.nomeTitular = nomeTitular
        this.numeroConta = numeroConta
        this.saldoInicial = saldoIncial
        this.saldoFinal = this.saldoInicial

    }
    depositar(valor) {
        if (valor > 0) {
            this.saldoFinal += valor
        } else {
            console.log("Valor precisa ser MAIOR que ZERO!")
        }
    }
    sacar(valor) {
        if (valor > 0 && this.saldoInicial >= valor) {
            this.saldoFinal -= valor
        } else {
            console.log("Saldo insuficiente")
        }
    }
    mostrarConta() {
        console.log("=========")
        console.log("Nome do Titular: " + this.nomeTitular)
        console.log("Número da conta: " + this.numeroConta)
        console.log("Saldo Inicial: " + this.saldoInicial)
        console.log("Saldo Atualizado: " + this.saldoFinal)
        console.log("=========")
    }

}

let encerrar = "n".toLowerCase

while (encerrar = "n" && encerrar != "s") {
    let nomeTitular = readlineSync.question("Nome Cliente: ")
    let numeroConta = readlineSync.question("Número da conta: ")
    let saldoInicial = Number(readlineSync.question("Saldo Inicial R$: "))
    let deposito = Number(readlineSync.question("Valor Depósito R$: "))
    let saque = Number(readlineSync.question("Valor Saque R$: "))

    let conta = new ContaBancaria(nomeTitular, numeroConta, saldoInicial)

    conta.depositar(deposito)
    conta.sacar(saque)
    conta.mostrarConta()
    encerrar = readlineSync.question("Deseja encerrar? S/N\n-> ")
}
console.log("👍")