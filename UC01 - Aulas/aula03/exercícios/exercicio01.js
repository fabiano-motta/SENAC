const readlineSync = require("readline-sync")
let idade = Number(readlineSync.question("Digite um número positivo ou negativo: "))
if (idade >= 0) {
    console.log("Número positivo")
} else {
    console.log("Número negativo")
}