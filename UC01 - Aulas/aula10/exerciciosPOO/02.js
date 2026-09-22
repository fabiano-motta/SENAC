const readlineSync = require("readline-sync")
let cont = 1

class Funcionario {
    constructor(nome, salario, mesesTrabalhados) {
        this.nome = nome
        this.salario = salario
        this.mesesTrabalhados = mesesTrabalhados
    }
    calcularTotal() {
        return this.salario * this.mesesTrabalhados
    }
    mostrarFuncionario() {
        console.log("=============")
        console.log("Nome: " + this.nome)
        console.log("Salário: " + this.salario.toFixed(2))
        console.log("Meses Trabalhados: " + this.mesesTrabalhados)
        console.log("Valor Total R$: " + this.calcularTotal().toFixed(2))
         console.log("=============\n")
    }
}

while (cont <= 5) {
    let nome = readlineSync.question("Nome do Funcionário " + cont + ": ")
    let salario = Number(readlineSync.question("Informe Salário: "))
    let mesesTrabalhados = readlineSync.question("Quantos meses trabalhados: ")
    
    let f = new Funcionario(nome, salario, mesesTrabalhados)
    f.mostrarFuncionario()
    cont++
}