let opcao = Number(prompt("Digite a opção de 1 à 3: "))

if (opcao >= 1 && opcao < 4) {
    switch (opcao) {
        case 1:
            let numero = Number(prompt("Digite um número inteiro"))
            if (numero % 2 == 0) {
                document.write("Número PAR")
            } else
                document.write("Número ÍMPAR")
            break
        case 2:
            let num1 = Number(prompt("Digite o primeiro número: "))
            let num2 = Number(prompt("Digite o segundo número: "))
            if (num1 > num2) {
                document.write(num1 + " é maior que " + num2)
            } else if (num1 < num2) {
                document.write(num1 + " é menor que " + num2)
            } else
                document.write(num1 + " é igual a " + num2)
            break
        case 3:
            let valor = Number(prompt("Digite um valor: "))
            let dobro = valor * 2
            document.write("O dobro de " + valor + (" é: ") + dobro)
            break

    }
} else
document.write("Digite um número de 1 à 3")