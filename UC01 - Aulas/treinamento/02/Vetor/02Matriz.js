const readlineSync = require("readline-sync")
let alunos = []
let notas = []
let medias = []
let acimaMedia = []

for (let i = 0; i < 2; i++) {
    alunos[i] = readlineSync.question("Digite o nome do " + (i + 1) + "º aluno: ")
    notas[i] = []
    let soma = 0
    for (let j = 0; j < 3; j++) {
        let notaDigitada = Number(readlineSync.question("Digite a " + (j + 1) + "ª nota: "))
        notas[i].push(notaDigitada)
        soma += notaDigitada
    }
    medias[i] = soma / 3
    if (notaDigitada > medias[i]) {
        acimaMedia[i] = medias[i]
    }
}

for (let i = 0; i < 2; i++) {
    console.log("\nAluno: " + alunos[i])
    console.log("Notas: " + notas[i]) // Exibe todo o conteúdo da linha de uma vez
    console.log("Média: " + medias[i].toFixed(2))
}