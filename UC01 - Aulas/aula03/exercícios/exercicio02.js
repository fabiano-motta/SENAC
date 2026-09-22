const readlineSync = require("readline-sync")
let nota = Number(readlineSync.question("Digite a note do aluno: "))
if (nota >= 5) {
    console.log("Aluno APROVADO") 
} else {
    console.log("Aluno REPROVADO")
}