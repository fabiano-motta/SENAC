let nome = prompt("Digite nome: ")
let idade = Number(prompt("Digite idade: "))
let ingresso = Number(prompt("Digite 1 se tem ingresso e 2 se não tem: "))
let estudante = Number(prompt("Se Estudante digite 1, se NÃO, digite 2: "))

if(idade >= 18 && ingresso == 1){
    if(estudante == 1){
        document.write(nome + " você tem direito a fila preferencial. Entrada liberada.")
    } else{
        document.write(nome + ", sua entrada está liberada!")
    }
} else
    document.write(nome + ", sua entrada NEGADA")