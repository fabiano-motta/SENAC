const readlineSync = require("readline-sync")
let nota = parseFloat(readlineSync.question("Digite a nota do aluno: "))

if (nota < 5) {
    console.log("Aluno REPROVADO")
} else if (nota <= 6.9) {
    console.log("Aluno em RECUPERAÇÃO")
} else {
    console.log("Aluno APROVADO")
}