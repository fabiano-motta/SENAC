const readlineSync = require("readline-sync")
let numeroMes = Number(readlineSync.question("Digite o número do mês desejado (1 à 12): "))

switch(numeroMes){
    case 1:
        console.log("JANEIRO - 31 dias")
        break
    case 2:
        console.log("FEVEREIRO - 28 dias")
        break
    case 3:
        console.log("MARÇO - 31 dias")
        break
    case 4:
        console.log("ABRIL - 30 dias")
        break
    case 5:
        console.log("MAIO - 31 dias")
        break
    case 6:
        console.log("JUNHO - 30 dias")
        break
    case 7:
        console.log("JULHO - 31 dias")
        break
    case 8:
        console.log("AGOSTO - 31 dias")
        break
    case 9:
        console.log("SETEMBRO - 30 dias")
        break
    case 10:
        console.log("OUTUBRO - 31 dias")
        break
    case 11:
        console.log("NOVEMBRO - 30 dias")
        break
    case 12:
        console.log("DEZEMBRO - 31 dias")
        break
    default:
        console.log("🛑 Dados inválidos!")
        break
}