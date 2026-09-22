const readlineSync = require("readline-sync")
let nome = readlineSync.question("Digite o nome do funcionário: ")
let salario = Number(readlineSync.question("Digite o valor do salário R$: "))
let tempo = Number(readlineSync.question("Quantos anos de empresa: "))
let bonus
let salarioFinal

if(tempo < 2){
    bonus = salario * 0.05
    salarioFinal = salario + bonus
    console.log("Funcionário: " + nome + "\nBônus: " + bonus + " / Salário Final: " + salarioFinal)
} else if (tempo <= 5){
    bonus = salario * 0.10
    salarioFinal = salario + bonus
    console.log("Funcionário: " + nome + "\nBônus: " + bonus + " / Salário Final: " + salarioFinal)
} else
    bonus = salario * 0.15
    salarioFinal = salario + bonus
    console.log("Funcionário: " + nome + "\nBônus: " + bonus + " / Salário Final: " + salarioFinal)