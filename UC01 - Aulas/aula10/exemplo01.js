class Produto{
    constructor(nome, preco, quantidade){
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }
    calcularTotal(){
        return this.preco * this.quantidade
    }
    mostrarProduto(){
        console.log("Produto: " + this.nome)
        console.log("Preço R$: " + this.preco)
        console.log("Quantidade: " + this.quantidade)
        console.log("Total R$: " + this.calcularTotal())
    }
}

let p = new Produto("Notebook", 3000, 30)
p.mostrarProduto()