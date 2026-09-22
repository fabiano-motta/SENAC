let readlineSync = require("readline-sync")
let matriz = []
let maior = 0

for (let i = 0; i < 3; i++) {
    matriz[i] = []
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = Number(readlineSync.question("Digite o número da posição [" +
            i + "][" + j + "]: "))
        if (maior <= matriz[i][j]) {
            maior = matriz[i][j]
        }
    }
}
    console.log("Maior número da Matriz " + maior)