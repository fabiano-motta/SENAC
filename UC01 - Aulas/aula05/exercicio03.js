const readlineSync = require("readline-sync")
let nome = readlineSync.question("Digite o nome do cliente: ")
let valorCompra = Number(readlineSync.question("Digite o valor da compra: "))
let formaPagamento = Number(readlineSync.question("Pagamento com PIX, digite 1. Para outros 2: "))
let desconto

if(formaPagamento == 1) {
    if(valorCompra < 200){
        desconto = valorCompra * 0.10
        console.log("Compra: " + valorCompra + "\nDesconto: " + desconto + "\nValor Final: " + (valorCompra - desconto))
    } else if (valorCompra <= 500){
        desconto = valorCompra * 0.15
        console.log("Compra: " + valorCompra + "\nDesconto: " + desconto + "\nValor Final: " + (valorCompra - desconto))
    } else
        desconto = valorCompra * 0.20
        console.log("Compra: " + valorCompra + "\nDesconto: " + desconto + "\nValor Final: " + (valorCompra - desconto))
} else {
    if(valorCompra < 200){
    desconto = valorCompra * 0.10
    console.log("Compra: " + valorCompra + "\nDesconto: " + desconto + "\nValor Final: " + (valorCompra - desconto))
    } else if (valorCompra <= 500){
        desconto = valorCompra * 0.15
        console.log("Compra: " + valorCompra + "\nDesconto: " + desconto + "\nValor Final: " + (valorCompra - desconto))
    } else
        desconto = valorCompra * 0.20
        console.log("Compra: " + valorCompra + "\nDesconto: " + desconto + "\nValor Final: " + (valorCompra - desconto))
}