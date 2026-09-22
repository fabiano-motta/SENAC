const readlineSync = require("readline-sync")
let nome = readlineSync.question("Digite o nome do produto: ")
let categoria = Number(readlineSync.question("Digite o código da categria do produto: "))

switch(categoria){
    case 1: 
        console.log("-> Produto: " + nome + "\n-> Categoria: Eletrônicos")
        break
    case 2: 
        console.log("-> Produto: " + nome + "\n-> Categoria: Informática")
        break
    case 3: 
        console.log("-> Produto: " + nome + "\n-> Categoria: Vestuário")
        break
    case 4: 
        console.log("-> Produto: " + nome + "\n-> Categoria: Alimentos")
        break
    case 5: 
        console.log("-> Produto: " + nome + "\n-> Categoria: Limpeza")
        break
    default:
        console.log("🛑 As categorias vão de 1 à 5. Tente novamente")
        break
}