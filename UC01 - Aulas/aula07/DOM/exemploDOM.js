function calcularTotal(){
    let nome = document.getElementById("nome").value
    let preco = Number(document.getElementById("preco").value)
    let quantidade = Number(document.getElementById("quantidade").value)
    let total = preco * quantidade
    
    document.getElementById("total").value = total
    document.getElementById("nomeRept").value = nome
}