function maior(){
    if(x > y){
        return "Primeiro valor é maior: " + x
    } else if(x < y){
        return "Segundo número é o maior: " + y
    } else{
        return "Os dois números são iguais."
    }
}

const readlineSync = require("readline-sync")
let x = Number(readlineSync.question("Digite o primeiro número: "))
let y = Number(readlineSync.question("Digite o segundo número: "))

console.log(maior())