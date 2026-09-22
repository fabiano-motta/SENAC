let readlineSync = require("readline-sync")

let matriz = []
let soma = 0

for (let i = 0; i < 3; i++) {
    matriz[i] = []
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = Number(readlineSync.question("Digite o número da posição [" + i + "][" + j + "]: "))
    }
}
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
        soma += matriz[i][j]
    }
}
console.log("Soma dos valores da MATRIZ: " + soma)