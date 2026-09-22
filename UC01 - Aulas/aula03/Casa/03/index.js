let nota = parseFloat(prompt("Digite a nota:"))

document.write("<h2>Classificação da Nota</h2>")
document.write("<p><strong>Nota informada: </strong>" + nota + "</p>")

if (nota > 10){
    document.write("<p>🛑 <strong>Digite valores de 0 à 10</strong></p>")
} else if (nota >= 9){
    document.write("<p><strong>Conceito:</strong> Excelente</p>")
} else if (nota >= 7){
    document.write("<p><strong>Conceito:</strong> Bom</p>")
} else if (nota >= 5)
    document.write("<p><strong>Conceito:</strong> Regular</p>")
else {
    document.write("<p><strong>Conceito:</strong> Insuficiente</p>")
}