const readlineSync = require("readline-sync")
let nomeVendedor = readlineSync.question("Digite o nome do vendedor: ")
let valorTotal = Number(readlineSync.question("Digite o valor total das vendas: "))
let comissao

if (valorTotal < 2000){
    comissao = valorTotal * 0.05
    console.log("Total das vendas de " + nomeVendedor + ": \n R$" + valorTotal + "\n Comissão de 5% - R$" + comissao.toFixed(2) + " Total à receber: R$" + (parseFloat(valorTotal + comissao)))
} else if (valorTotal < 5000){
    comissao = valorTotal * 0.08
    console.log("Total das vendas de " + nomeVendedor + ": \n R$" + valorTotal + "\n Comissão de 8% - R$" + comissao.toFixed(2) + " Total à receber: R$" + (valorTotal.toFixed(2) + comissao.toFixed(2)))
} else if (valorTotal < 10000) {
    comissao = valorTotal * 0.10
    console.log("Total das vendas de " + nomeVendedor + ": \n R$" + valorTotal + "\n Comissão de 10% - R$" + comissao.toFixed(2) + " Total à receber: R$" + (valorTotal.toFixed(2) + comissao.toFixed(2)))
} else {
    comissao = valorTotal * 0.12
    console.log("Total das vendas de " + nomeVendedor + ": \n R$" + valorTotal + "\n Comissão de 12% - R$" + comissao.toFixed(2) + " Total à receber: R$" + (valorTotal.toFixed(2) + comissao.toFixed(2)))
}