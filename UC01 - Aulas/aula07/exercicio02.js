function verificarParImpar(x){
    if(x % 2 == 0){
       return "PAR"
    } else{
        return "ÍMPAR"
    }
}

const readlineSync = require("readline-sync")
let n = Number(readlineSync.question("Digite um número: "))

console.log(n + " é " + verificarParImpar(n))