const readlineSync = require("readline-sync")
let nomeCliente = readlineSync.question("Digite o nome do cliente: ")
let tipoVeiculo = Number(readlineSync.question("Digite o tipo de veículo: \n 1-Moto \n 2-Carro \n 3-Caminhonete \n 4-Caminhão \n -> "))
let quantidadeHora = Number(readlineSync.question("Digite a quantidade de horas estacionadas: "))

//Decidi criar variáveis para os valores de cada tipo de veículo apenas para diversificar. É mais fácil alterar o valor pré-definido de uma variável do que alterar o código sempre que o valor for alterado
let horaMoto = 5.00
let horaCarro = 8.00
let horaCaminhonete = 10.00
let horaCaminhao = 15.00
let desconto = 0.10
let total

switch (tipoVeiculo) {
    case 1:
        console.log("Cliente: " + nomeCliente + "\nVeículo: Moto \nTempo de permanência: " + quantidadeHora)
        if (quantidadeHora > 8) {
            total = (quantidadeHora * horaMoto)
            total = total - (total * desconto)
            console.log("Total com desconto de 10%: " + total.toFixed(2))
        } else {
            total = quantidadeHora * horaMoto
            console.log("Total a pagar: " + total.toFixed(2))
        }
        break
    case 2:
        console.log("Cliente: " + nomeCliente + "\nVeículo: Carro \n Tempo de permanência: " + quantidadeHora)
        if (quantidadeHora > 8) {
            total = (quantidadeHora * horaCarro)
            total = total - (total * desconto)
            console.log("Total com desconto de 10%: " + total.toFixed(2))
        } else {
            total = quantidadeHora * horaCarro
            console.log("Total a pagar: " + total.toFixed(2))
        }
        break
    case 3:
        console.log("Cliente: " + nomeCliente + "\nVeículo: Caminhonete \n Tempo de permanência: " + quantidadeHora)
        if (quantidadeHora > 8) {
            total = (quantidadeHora * horaCaminhonete)
            total = total - (total * desconto)
            console.log("Total com desconto de 10%: " + total.toFixed(2))
        } else {
            total = quantidadeHora * horaCaminhonete
            console.log("Total a pagar: " + total.toFixed(2))
        }
        break
    case 4:
        console.log("Cliente: " + nomeCliente + "\nVeículo: Caminhão \n Tempo de permanência: " + quantidadeHora)
        if (quantidadeHora > 8) {
            total = (quantidadeHora * horaCaminhao)
            total = total - (total * desconto)
            console.log("Total com desconto de 10%: " + total.toFixed(2))
        } else {
            total = quantidadeHora * horaCaminhao
            console.log("Total a pagar: " + total.toFixed(2))
        }
        break
    default:
        console.log("🛑 Opção INVÁLIDA!")
        break
}