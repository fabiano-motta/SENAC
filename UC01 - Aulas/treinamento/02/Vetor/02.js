function calculaMedia(totalSoma, quantidadeNotas) {
    return totalSoma / quantidadeNotas
}

const readlineSync = require("readline-sync")
let alunos = []
let notas = []
let soma = 0
let acimaMedia = []
let i = 0

while (i < 5) {
    alunos[i] = readlineSync.question("Digite o nome do " + (i + 1) + "º aluno: ")
    notas[i] = Number(readlineSync.question("Digite a nota de " + (alunos[i]) + ": "))
    soma += notas[i]
    i++
}

let media = calculaMedia(soma, notas.length)
for (let j = 0; j < notas.length; j++) {
    if (notas[j] > media)
        acimaMedia.push(notas[j])
}
console.log("\nMédia Geral: " + media.toFixed(2))
console.log("\nNotas: " + (notas.join(", ")))
console.log("\nNotas acima da Média: " + acimaMedia.join(", "))


