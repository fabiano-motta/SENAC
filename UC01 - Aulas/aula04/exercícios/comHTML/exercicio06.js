let idade = parseInt(prompt("Digite a idade: "))
let esporte = parseInt(prompt("Esporte: \n 1 para NATAÇÃO \n 2 para CORRIDA \n 3 para CICLISMO "))

switch(esporte){
    case 1:
        if(idade < 10){
            document.write("<p>Categoria: <strong>Mirim</strong></p>")
        } else if (idade <= 14){
            document.write("<p>Categori: <strong>Infantil</strong></p>")
        } else
            document.write("<p>Categoria: <strong>Juvenil</strong></p>")
        break
    case 2:
        if(idade < 16){
            document.write("<p>Categoria: <strong>Júnior</strong></p>")
        } else
            document.write("<p>Categoria: <strong>Infantil</strong></p>")
        break
    case 3:
        if(idade >= 18){
            document.write("<p>Categoria: <strong>Profissional</strong></p>")
        } else
            document.write("<p>Categoria: <strong>Amador</strong></p>")
        break
    default:
        document.write("<p><strong>Opção inválida!</strong></p>")
        break
}