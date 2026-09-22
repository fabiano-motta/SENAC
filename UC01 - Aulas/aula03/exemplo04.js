const readlineSync = require("readline-sync")
let x = Number(readlineSync.question("Digite o 1º valor: "))
let y = Number(readlineSync.question("Digite o 2º valor: "))

if (x > y) {
    console.log(x + " é maior que " + y)
} else if (x < y) {
    console.log(x + " é menor que " + y)
} else {
    console.log(x + " é igual a " + y)
}