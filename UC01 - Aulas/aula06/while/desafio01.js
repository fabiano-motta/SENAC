const readlineSync = require("readline-sync")
let fim = "sim"
let numero

while (fim.toLowerCase() == "sim") {
    let escolha = Number(readlineSync.question("Digite um número de 1 à 3 para escolher um cálculo surpresa: "))
    switch (escolha) {
        case 1:
            console.log("PAR ou ÍMPAR?")
            numero = Number(readlineSync.question("Escolha um número e saiba qual é par ou ímpar: "))
            if (numero % 2 == 0) {
                console.log(numero + " é PAR!")
            } else {
                console.log(numero + " é ÍMPAR!")
            }
            break
        case 2:
            console.log("Digite dois números e saiba quem é o maior entre eles ou se são iguais")
            let num1 = Number(readlineSync.question("Digite o primeiro número: "))
            let num2 = Number(readlineSync.question("Digite o segundo número: "))
            if (num1 > num2) {
                console.log(num1 + " é MAIOR que " + num2)
            } else if (num1 == num2) {
                console.log(num1 + " é IGUAL a " + num2)
            } else {
                console.log(num1 + " é MENOR que " + num2)
            }
            break
        case 3:
            console.log("Digite um número e descubra qual o seu dobro: ")
            numero = Number(readlineSync.question("Digite um número: "))
            console.log("O DOBRO de " + numero + " é " + (numero * 2))
            break
        default:
            console.log("Opção INVÁLIDA")
            break
    }
    fim = readlineSync.question("Deseja continuar a aplicação? SIM ou NÃO ")
}