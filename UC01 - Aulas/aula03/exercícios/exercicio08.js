const readlineSync = require("readline-sync")
let salario = parseFloat(readlineSync.question("Digite o salário: "))

if (salario < 2000) {
    console.log("Salário BAIXO")
} else if (salario <= 5000) {
    console.log("Salário MÉDIO")
} else {
    console.log("Salário ALTO")
}