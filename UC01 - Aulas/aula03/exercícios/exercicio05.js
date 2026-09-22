const readlineSync = require("readline-sync")
let idade = Number(readlineSync.question("Digite a idade: "))

if (idade < 18) {
    console.log("Menor de idade")
} else if (idade < 59) {
    console.log("Adulto")
} else {
    console.log("Idoso")
}