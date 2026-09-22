function calcularDobro(x){
    return x * 2
}
// const readlineSync = require("readline-sync")
let numero = Number(prompt("Digite um número: "))

document.write("O dobro de " + numero + " é " + calcularDobro(numero))