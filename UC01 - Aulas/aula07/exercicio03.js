function media(){
    return (x + y) / 2
}

const readlineSync = require("readline-sync")
let x = Number(readlineSync.question("Digite a nota 1: "))
let y = Number(readlineSync.question("Digite a nota 2: "))

console.log(media())