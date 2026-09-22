const readlineSync = require("readline-sync")
let nome = readlineSync.question("Digite o nome: ")
let n1 = Number(readlineSync.question("Digite a primeira nota: "))
let n2 = Number(readlineSync.question("Digite a segunda nota: "))
let n3 = Number(readlineSync.question("Digite a terceira nota: "))
let media = (n1 + n2 + n3) / 3

if(media < 5){
    console.log("Notas: " + n1 + ", " + n2 + ", " + n3 + "\nMédia de " + nome + " é " + media.toFixed(1) + " -> REPROVADO")
} else if (media < 7){
    console.log("Notas: " + n1 + ", " + n2 + ", " + n3 + "\nMédia de " + nome + " é " + media.toFixed(1) + " -> RECUPERAÇÃO")
} else
    console.log("Notas: " + n1 + ", " + n2 + ", " + n3 + "\nMédia de " + nome + " é " + media.toFixed(1) + " -> APROVADO")