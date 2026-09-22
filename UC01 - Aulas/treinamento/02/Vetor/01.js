const readlineSync = require("readline-sync")

let numeros = []
let contPar = 0
let contImpar = 0

for(let i = 0; i < 10; i++){
    numeros[i] = readlineSync.question("Digite um número: ")
    if(numeros[i] %2 == 0){
        contPar++
    } else {
        contImpar++
    }
}

console.log("================")
console.log("➡️ PARES: " + contPar)
console.log("----------------")
console.log("➡️ ÍMPARES: " + contImpar)
console.log("================")