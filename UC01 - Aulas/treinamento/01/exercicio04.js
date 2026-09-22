const readlineSync = require("readline-sync")
let nomeCliente = readlineSync.question("Digite o nome do cliente: ")
let consumoEnergia = Number(readlineSync.question("Digite o consumo em kWh: "))
let totalConsumo

if (consumoEnergia <= 100){
    totalConsumo = consumoEnergia * 0.50
    console.log("-> " + nomeCliente + ", sua conta é de R$" + totalConsumo.toFixed(2))
} else if (consumoEnergia <= 200){
    totalConsumo = consumoEnergia * 0.65
    console.log("-> " + nomeCliente + ", sua conta é de R$" + totalConsumo.toFixed(2))
} else if (consumoEnergia <= 300){
    totalConsumo = consumoEnergia * 0.80
    console.log(nomeCliente + ", sua conta é de R$" + totalConsumo.toFixed(2))
} else {
    totalConsumo = consumoEnergia * 1.00
    console.log(nomeCliente + ", sua conta é de R$" + totalConsumo.toFixed(2))
}
