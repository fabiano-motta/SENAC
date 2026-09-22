const readlineSync = require("readline-sync")
let numeros = []
let soma = 0

for (let i = 0; i < 5; i++) {
    let numero = Number(readlineSync.question("Digite um número: "))
    numeros.push(numero)
    soma += numero
}

console.log("Números Digitados")
console.log(numeros)
console.log("Soma dos números: " + soma)