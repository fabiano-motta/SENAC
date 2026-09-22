function calculaMedia(totalSoma, quantidadeNotas) {
    return totalSoma / quantidadeNotas
}
let readlineSync = require("readline-sync")

let numeros = []
let media
let soma = 0

for (let i = 0; i < 5; i++){
    numeros[i] = Number(readlineSync.question("Digite o " + [i + 1] + "º número: "))
    soma += numeros[i]
}
media = calculaMedia(soma, numeros.length)
console.log("Média: " + media)

