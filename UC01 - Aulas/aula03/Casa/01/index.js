let nome = prompt("Digite seu nome: ")
let salarioBruto = parseFloat(prompt("Digite seu salário: "))

let inss

if (salarioBruto >= 3000) {
    inss = salarioBruto * 0.11
} else if (salarioBruto >= 2000) {
    inss = salarioBruto * 0.09
} else {
    inss = salarioBruto * 0.08
}

let vale

if (salarioBruto >= 2000) {
    vale = salarioBruto * 0.06
} else {
    vale = salarioBruto * 0.05
}

let bonus

if (salarioBruto >= 3000) {
    bonus = 300
} else {
    bonus = 200
}

let cargo

if (salarioBruto >= 3000) {
    cargo = "Acionista"
} else if (salarioBruto >= 2000) {
    cargo = "Gerente"
} else {
    cargo = "Vendedor"
}

let desconto = inss + vale
let salarioLiquido = (salarioBruto - desconto) + bonus

document.write("<h2>Resultados</h2>");
document.write("<p><strong>Nome:</strong> " + nome + "</p>");
document.write("<p><strong>Cargo:</strong> " + cargo + "</p>");
document.write("<p><strong>Salario Bruto:</strong> R$ " + salarioBruto.toFixed(2) + "</p>")
document.write("<p><strong>INSS:</strong> R$ " + inss.toFixed(2) + "</p>")
document.write("<p><strong>Vale Transporte:</strong> R$" + vale.toFixed(2) + "</p>")
document.write("<p><strong>Bônus:</strong> R$" + bonus.toFixed(2) + "</p>")
document.write("<p><strong>Salário Líquido:</strong> R$ " + salarioLiquido.toFixed(2) + "</p>");