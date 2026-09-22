const readlineSync = require("readline-sync")
let nomeMotorista = readlineSync.question("Digite o nome do motorista: ")
let codigoTipo = Number(readlineSync.question("Digite o código do tipo do veículo (1 à 5): "))

switch(codigoTipo){
    case 1:
        console.log("Motorista: " + nomeMotorista + "\n Tipo do veículo: Motocicleta")
        break
    case 2:
        console.log("Motorista: " + nomeMotorista + "\n Tipo do veículo: Carro")
        break
    case 3:
        console.log("Motorista: " + nomeMotorista + "\n Tipo do veículo: Caminhonete")
        break
    case 4:
        console.log("Motorista: " + nomeMotorista + "\n Tipo do veículo: Caminhão")
        break
    case 5:
        console.log("Motorista: " + nomeMotorista + "\n Tipo do veículo: Ônibus")
        break
    default:
        console.log("🛑 Dados inválidos!")
        break
}