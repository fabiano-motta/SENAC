//DESAFIO 01

function calcularSalario() {
    let nomeFuncionario = document.getElementById("nome").value
    let salarioBruto = Number(document.getElementById("salario").value)
    let inss

    // INSS
    if (salario >= 3000) {
        inss = salarioBruto * 0.11
    } else {
        inss = salarioBruto * 0.09
    }

    // VALE
    let vale = salarioBruto * 0.05

    //Salário Liquido
    let salarioLiquido = salarioBruto - inss - vale

    document.getElementById("resultado").innerHTML = "<h3>Resultado</h3>" +
        "Nome: " + nomeFuncionario + "<br>" +
        "Salário Bruto: R$ " + salarioBruto.toFixed(2) + "<br>" +
        "INSS: R$ " + inss.toFixed(2) + "<br>" +
        "Vale: R$ " + vale.toFixed(2) + "<br>" +
        "Salário Líquido: R$ " + salarioLiquido.toFixed(2) + "<br>"

}

// DESAFIO 02

function escolhaOpcao() {
    let numero = Number(prompt("Digite um número: "))
    let opcao = Number(document.getElementById("opcao").value)
    let numeroTipo = ""
    let mensagem = ""

    //while (continua == "S") {
        switch (opcao) {
            case 1:
                //Par ou Ímpar"
                if (numero % 2 == 0) {
                    numeroTipo = "PAR"
                    mensagem = "O número " + numero + " é " + numeroTipo
                } else {
                    numeroTipo = "ÍMPAR"
                    mensagem = "O número " + numero + " é " + numeroTipo
                }
                break
            case 2:
                //Positivo, Negativo ou Zero
                if (numero > 0) {
                    numeroTipo = "POSITIVO"
                    mensagem = "O número " + numero + " é " + numeroTipo
                } else if (numero < 0) {
                    numeroTipo = "NEGATIVO"
                    mensagem = "O número " + numero + " é " + numeroTipo
                } else {
                    numeroTipo = "ZERO"
                    mensagem = "O número " + numero + " é " + numeroTipo
                }
                break
            case 3:
                //Dobro
                if (numero > 0) {
                    numeroTipo = "POSITIVO"
                } else if (numero < 0) {
                    numeroTipo = "NEGATIVO"
                } else {
                    numeroTipo = "ZERO"
                }
                mensagem = "O dobro de " + numero + " é " + (numero * 2) + ", " + numeroTipo
                break
        }
        document.getElementById("resultado").innerHTML = "<h2>Resultado da Opção Escolhida</h2><p>" +
            mensagem + "</p>"
        // let continua = prompt("Deseja realizar outra operação? Digite S para continuar ou N para sair.")
        // if ((continua != null && continua.toLowerCase() == "s")) {
        //     alert("FLW!")
        // } else if (continua.toLowerCase() != "s") {
        //     alert("Opção inválida! FLW!")
        // }
    }
//}