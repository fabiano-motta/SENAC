const readlineSync = require("readline-sync")
let operacao = readlineSync.question("Digite a operação desejada (+ ou - ou / ou *): ")

switch(operacao){
    case "+":
        console.log("Você escolheu SOMA")
        break
    case "-":
        console.log("Você escolheu SUBTRAÇÃO")
        break
    case "/":
        console.log("Você escolheu DIVISÃO")
        break
    case "*":
        console.log("Você escolheu MULTIPLICAÇÃO")
        break
    default:
        console.log("Operação inválida!")
        break
}