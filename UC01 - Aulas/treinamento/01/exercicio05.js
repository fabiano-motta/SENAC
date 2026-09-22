const readlineSync = require("readline-sync")
let nomeCliente = readlineSync.question("Digite o nome do cliente: ")
let salario = Number(readlineSync.question("Digite o valor do salário: "))
let idade = Number(readlineSync.question("Digite a idade: "))
let valorSolicitado = Number(readlineSync.question("Digite o valor solicitado de empréstimo: "))
let quantidadeParcela = Number(readlineSync.question("Digite o número de parcelas desejada: "))
let valorParcela = valorSolicitado / quantidadeParcela
let limite = salario * 0.30

if(idade >= 21 && idade <= 60){
    if(valorParcela <= limite && valorSolicitado <= 50000){
        console.log("🎉 " + nomeCliente + ", seu empréstimo foi aprovado. \n 🤑 A parcela será de " + valorParcela.toFixed(2))
    } else
        console.log(valorParcela.toFixed(2) + " 🛑 Verifique se o valor da parcela não excede a 30% do seu salário ou o valor pedido está acima de 50 mil.")
} else
    console.log("🛑 " + nomeCliente + ", você precisa ter entre 21 e 60 anos para pedir o empréstimo!")

