let nome = prompt("Digite nome: ")
let salario = Number(prompt("Digite o salário: "))
let valorParcela = Number(prompt("Digite o valor da parcela: "))
let numeroParcela = prompt("Digite o número de parcelas: ")
let percentual = 0.30 * salario

if(valorParcela <= percentual && numeroParcela <= 60 ){
    document.write(nome + " seu empréstimo foi aprovado")
} else
    document.write(nome + " seu empréstimo foi negado porque a parcela e/ou o número de parcelas é maior que o permitido")