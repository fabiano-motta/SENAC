const readlineSync = require("readline-sync")
let nome = readlineSync.question("Digite nome: ")
let opcao = Number(readlineSync.question("Digite 1 para Suporte técnico, 2 para Financeiro, 3 para Comercial, 4 para Recursos Humanos e 5 para Sair: "))

console.log(nome + "você escolheu: ")
switch(opcao){
    case 1:
        console.log("Suporte")
        break
    case 2:
        console.log("Financeiro")
        break
    case 3:
        console.log("Comercial")
        break
    case 4:
        console.log("Recursos Humanos")
        break
    default:
        console.log("Tchau")
        break
}