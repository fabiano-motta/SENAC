const readlineSync = require("readline-sync")
let turno = readlineSync.question("Digite a inicial correspondente ao turno - M, T ou N: ")

switch (turno){
    case "m":
        console.log("Bom dia!")
        break
    case "t":
        console.log("Boa tarde!")
        break
    case "n":
        console.log("Bom noite!")
        break
    default:
        console.log("Opção inválida!")
        break
}