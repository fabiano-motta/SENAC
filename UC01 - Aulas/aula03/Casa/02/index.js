let nomeProduto = prompt("Digite o nome do produto:")
let precoProduto = parseFloat(prompt("Digite o preço:"))
let quantidadeVendida = parseInt(prompt("Digite a quantidade vendida:"))
let valorCompra = parseFloat(precoProduto * quantidadeVendida)
let desconto
let frete

//Desconto
if (valorCompra >= 1000){
    desconto = valorCompra * 0.15
} else if (valorCompra >= 500 ) {
    desconto = valorCompra * 0.10
} else {
    desconto = valorCompra * 0.05
}

//Frete
if (valorCompra >= 800){
    frete = 0
} else {
    frete = 50
}

//Categoria
let categoria
if (valorCompra >= 1000){
    categoria ="Compra Grande"
} else {
    categoria = "Compra Média"
}

let valorFinalCompra = (valorCompra - desconto) + frete
//Exibição HTML
document.write("<h2>Resultado</h2>")
document.write("<p><strong>Nome do Produto: </strong>" + nomeProduto + "</p>")
document.write("<p><strong>Valor Unitário: </strong>" + precoProduto + "</p>")
document.write("<p><strong>Quantidade Vendida: </strong>" + quantidadeVendida + "</p>")
document.write("<p><strong>Subtotal da Compra:</strong> R$ " + valorCompra.toFixed(2) + "</p>")
document.write("<p><strong>Desconto:</strong> R$ " + desconto.toFixed(2) + "</p>")
document.write("<p><strong>Frete:</strong> R$ " + frete.toFixed(2) + "</p>")
document.write("<p><strong>Categoria: </strong>" + categoria + "</p>")
document.write("<p><strong>Valor Final da Compra:</strong> R$ " + valorFinalCompra.toFixed(2) + "</p>")