const readlineSync = require("readline-sync")
let nome = readlineSync.question("Digite o nome: ")
let idade = Number(readlineSync.question("Digite a idade: "))

if (idade < 12){
    console.log(nome + " tem " + idade + " anos - 🧒 Criança")
} else if (idade < 17) {
    console.log(nome + " tem " + idade + " anos - 👦 Adolescente")
} else if (idade < 59) {
    console.log(nome + " tem " + idade + " anos - 👨 Adulto")
} else
    console.log(nome + " tem " + idade + " anos - 👴 Idoso")