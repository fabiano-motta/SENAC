const readlineSync = require("readline-sync")
let temperatura = parseFloat(readlineSync.question("Digite a temperatura: "))

if (temperatura < 15) {
    console.log("FRIO")
} else if (temperatura <= 29) {
    console.log("AGRADÁVEL")
} else {
    console.log("QUENTE")
}