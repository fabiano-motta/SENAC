function calcularMedia(somaNotas, quantidaNotas) {
    return somaNotas / quantidaNotas
}

let readlineSync = require("readline-sync")
let alunos = []
let notas = []

for (let i = 0; i < 3; i++) {
    alunos[i] = readlineSync.question("Digite o nome do aluno: ")
    notas[i] = []
    for (let j = 0; j < 2; j++) {
        notas[i][j] = Number(readlineSync.question("Digite a " + (j + 1) + "a. nota: "))
    }
}
console.log("\nAlunos")
for (let i = 0; i < alunos.length; i++) {
    let somaNotasAluno = 0
    for (let j = 0; j < notas[i].length; j++) {
        somaNotasAluno += notas[i][j]
    }
    let media = calcularMedia(somaNotasAluno, notas[i].length)
    console.log(alunos[i] + "-> Notas: " + notas[i].join(" | ") + " / Média: " + media.toFixed(2))
}
