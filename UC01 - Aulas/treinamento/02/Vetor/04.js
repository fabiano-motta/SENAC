let readlineSync = require("readline-sync")

let numeros = []
let contPositivo = 0
let contNegativo = 0
let contZero = 0

for (let i = 0; i < 5; i++){
    numeros[i] = Number(readlineSync.question("Digite o " + [i + 1] + "º número: "))
    if(numeros[i] > 0){
        contPositivo += 1 
    } else if (numeros[i] < 0){
        contNegativo += 1
    } else {
        contZero += 1
    }
}

console.log("Números Positivos: " + contPositivo)
console.log("Números Negativos: " + contNegativo)
console.log("Números Zero: " + contZero)

