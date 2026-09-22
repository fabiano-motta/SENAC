const readlineSync = require("readline-sync")
let numeros = []

for (let i = 0; i < 5; i++) {
    let numero = Number(readlineSync.question("Digite um número: "))
    numeros.push(numero)
}
let menor = numeros[0]
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
        menor = numeros[i]
    }
}

console.log("Vetor")
console.log(numeros)
console.log("menor número entre eles: " + menor)
console.log("Posição do menor número: " + numeros.indexOf(menor))