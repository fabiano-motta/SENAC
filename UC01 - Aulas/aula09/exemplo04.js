const readlineSync = require("readline-sync")
let matriz = []

for (let linha = 0; linha < 3; linha++) {
    matriz[linha] = []
    for (let coluna = 0; coluna < 3; coluna++)
        matriz[linha][coluna] = Number(readlineSync.question("Digite o valor da linha: " +
            (linha + 1) + " ,coluna " + (coluna + 1) + ": "))
}
console.log("\nMatriz: ")
for (let linha = 0; linha < 3; linha++) {
    let resultado = ""
    for (let coluna = 0; coluna < 3; coluna++) {
        resultado += matriz[linha][coluna] + " "
    }
    console.log(resultado)
}