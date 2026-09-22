const readlineSync = require("readline-sync")
let num
let i = 1
let positivo = 0
let negativo = 0

console.log("Digite 8 números, negativos ou positivos: ")
while (i <= 8) {
    num = readlineSync.question(i + " Digite o " + i + "º número: ")
    if (num >= 0) {
        positivo++
    } else {
        negativo++
    }
    i++
}
console.log("Números positivos: " + positivo)
console.log("Numeros negativos: " + negativo)