const readlineSync = require("readline-sync")
let senha = readlineSync.question("Digite uma senha numérica: ")
if (senha == "1234") {
    console.log("Acesso permitido")
} else {
    console.log("Senha insegura")
}