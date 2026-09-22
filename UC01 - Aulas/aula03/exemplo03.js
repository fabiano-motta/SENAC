const readlineSync = require("readline-sync")
let idade = Number(readlineSync.question("Digite sua idade:"))
if (idade >= 18) {
    console.log("Maior de idade") 
}else {
    console.log("Menor de idade")
}