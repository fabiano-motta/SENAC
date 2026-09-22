const readlineSync = require("readline-sync")
let num = Number(readlineSync.question("Digite um número de 1 a 7: "))

switch(num){
    case 1:
        console.log("O número corresponde a DOMINGO")
        break
    case 2:
        console.log("O número corresponde a SEGUNDA")
        break
    case 3:
        console.log("O número corresponde a TERÇA")
        break
    case 4:
        console.log("O número corresponde a QUARTA")
        break
    case 5:
        console.log("O número corresponde a QUINTA")
        break
    case 6:
        console.log("O número corresponde a SEXTA")
        break
    case 7:
        console.log("O número corresponde a SÁBADO")
        break
    default:
        console.log("Que parte do 1 a 7 você não entendeu?")
        break
}