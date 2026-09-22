function calcularDobro(x){
    return x * 2
}
const readlineSync = require("readline-sync")
let n = Number(readlineSync.question("Digite um número: "))

console.log("O dobro é: " + calcularDobro(n))