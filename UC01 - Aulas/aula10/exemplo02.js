const readlineSync = require("readline-sync")

class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }
    calcularTotal() {
        return this.preco * this.quantidade
    }
    mostrarProduto() {
        console.log("Produto: " + this.nome)
        console.log("Preço R$: " + this.preco)
        console.log("Quantidade: " + this.quantidade)
        console.log("Total R$: " + this.calcularTotal().toFixed(2))
    }
}

for (let i = 1; i <= 3; i++) {
    console.log("Produto " + i + "\n")
    let nome = readlineSync.question("Nome do Produto: ")
    let preco = Number(readlineSync.question("Preço R$: "))
    let quantidade = readlineSync.question("Quantidade: ")

    let p = new Produto(nome, preco, quantidade)
    p.mostrarProduto()
    console.log("\n")
}
