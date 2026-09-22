const readlineSync = require("readline-sync")
let num1 = Number(readlineSync.question("Digite o primeiro número: "))
let num2 = Number(readlineSync.question("Digite o segundo número: "))
let opcao = Number(readlineSync.question("Digite 1 para Somar, 2 para Subtrair, 3 para Multiplicar, 4 para Dividir e 5 para saber o Resto da divisão: "))

switch(opcao){
    case 1:
        console.log("Soma: " + (num1 + num2))
        break
    case 2:
        console.log("Subtração: " + (num1 - num2))
        break
    case 3:
        console.log("Multiplicação: " + (num1 * num2))
        break
    case 4:
        if (num1 != 0 && num2 != 0){
            console.log("Divisão: " + (num1 / num2))
        } else
            console.log("Divisão por 0 não permitida!")
        break
    case 5:
        console.log("Resto: " + (num1 % num2))
        break
    default:
        console.log("Opção Inválida!")
        break
}