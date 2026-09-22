const readlineSync = require("readline-sync")
let nomeFuncionario = readlineSync.question("Digite o nome do funcionario: ")
let notaDesempenho = Number(readlineSync.question("Digite a nota de desempenho: "))
let numeroFaltas = Number(readlineSync.question("Digite o número de faltas: "))

if (notaDesempenho >= 9 && numeroFaltas <= 2){
    console.log(nomeFuncionario + ": Excelente.")
} else if (notaDesempenho >= 7 && numeroFaltas <= 5){
    console.log(nomeFuncionario + ": Bom.")
} else if (notaDesempenho >= 5){ //Não havia um critério de faltas para esta condição
    console.log(nomeFuncionario + ": Regular.")
} else
    console.log("Insatisfatório")