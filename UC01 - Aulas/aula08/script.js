// Exercício 01
function calcularDesconto() {
    let valorProduto = document.getElementById("valor").value
    let percentual, valorFinal, desconto

    if (valorProduto >= 500) {
        percentual = 9
        desconto = valorProduto * (percentual / 100)
        valorFinal = valorProduto - desconto
    } else if (valorProduto >= 200) {
        percentual = 8
        desconto = valorProduto * (percentual / 100)
        valorFinal = valorProduto - desconto
    } else {
        percentual = 7
        desconto = valorProduto * (percentual / 100)
        valorFinal = valorProduto - desconto
    }

    document.getElementById("resultado").innerHTML = "<h3>Resultado</h3>" +
        "Valor Original: R$ " + valorProduto + "<br>" +
        "Percentual: " + percentual + " % <br>" +
        "Valor do desconto: R$ " + desconto.toFixed(2) + "<br>" +
        "Valor Final do Produto: R$ " + valorFinal.toFixed(2)
}

// Exercício 02
function calcularIMC() {
    let altura = document.getElementById("altura").value
    let peso = document.getElementById("peso").value
    let imc = peso / (altura * altura)
    let classificacao

    if (imc < 16.9) {
        classificacao = "Muito abaixo do peso"
    } else if (imc >= 17 && imc <= 18.4) {
        classificacao = "Abaixo do peso"
    } else if (imc <= 24.9) {
        classificacao = "Peso Normal"
    } else if (imc <= 29.9) {
        classificacao = "Acima do Peso"
    } else if (imc <= 34.9) {
        classificacao = "Obesidade Grau I"
    } else if (imc <= 40) {
        classificacao = "Obesidade Grau II"
    } else {
        classificacao = "Obesidade Grau III"
    }

    document.getElementById("resultado").innerHTML = "<h3>Resultado</h3>" +
        "IMC: " + imc.toFixed(2) + "<br>" +
        "Classificação: " + classificacao
}

// Exercício 03
function escolherCalculo() {
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let opcao = document.getElementById("opcao").value
    let resultado

    switch (opcao) {
        case "1":
            resultado = n1 + n2
            break
        case "2":
            resultado = n1 - n2
            break
        case "3":
            resultado = n1 * n2
            break
        case "4":
            resultado = n1 / n2
            break
        default:
            console.log("Opção Inválida!")
            break
    }

    document.getElementById("resultado").innerHTML = "<h3>Resultado</h3>" +
        "Resultado do calculo: " + resultado
}

// Exercício 04
function calcularSituacao() {
    let nome = document.getElementById("nome").value
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let media = (nota1 + nota2) / 2
    let situacao

    if (media >= 7) {
        situacao = "APROVADO"
    } else if (media >= 5) {
        situacao = "RECUPERAÇÃO"
    } else
        situacao = "REPROVADO"

    document.getElementById("resultado").innerHTML = "<h3>Resultado</h3>" +
        "🧑‍🎓 ALUNO: " + nome + "<br> 📝 NOTA 1: " + nota1 + "<br> 📝 NOTA 2: " + nota2 +
        "<br> ⚖️ Média: " + media + "<br> ➡️ Situação: " + situacao
}