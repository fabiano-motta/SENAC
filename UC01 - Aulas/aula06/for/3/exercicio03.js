for(let i = 0; i < 5; i++){
    console.log("Passada " + i)
    let nome = prompt("Digite um nome: ")
    let prova1 = Number(prompt("Digite a nota da prova 1: "))
    let prova2 = Number(prompt("Digite a nota da prova 2: "))
    let prova3 = Number(prompt("Digite a nota da prova 3: "))
    let media = (prova1 + prova2 + prova3) / 3

        if(media < 5){
            document.write(nome + " - REPROVADO <br>")
        } else if( media < 7){
            document.write(nome + " - RECUPERAÇÃO <br>")
        } else {
            document.write(nome + " - APROVADO <br>")
        }
}