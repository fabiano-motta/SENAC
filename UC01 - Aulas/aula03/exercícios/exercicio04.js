const readlineSync = require("readline-sync")
let valor = parseFloat(readlineSync.question("Digite o valor da compra: "))
if (valor >= 100) {
    console.log("Você ganhou um desconto")

    } else {
        console.log("Compra menor que 100,00. Sem desconto.")
    }