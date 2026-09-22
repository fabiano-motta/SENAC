const readlineSync = require("readline-sync")
let nome = readlineSync.question("Digite o nome do usuário: ")
let codigoNivelAcesso = Number(readlineSync.question("Digite o código de nível de acesso (1 à 5): "))

switch(codigoNivelAcesso){
    case 1:
        console.log(nome + " - Administrador \n Controle total do sistema")
        break
    case 2:
        console.log(nome + " - Gerente \n Controla ações dos usuários não administradores e define escopo de uso para eles.")
        break
    case 3:
        console.log(nome + " - Supervisor \n Tem acesso ao que é feito pelo usuário do tipo funcionário.")
        break
    case 4:
        console.log(nome + " - Funcionário \n Insere, edita e exclui os dados pertinentes à sua função.")
        break
    case 5:
        console.log(nome + " - Visitante \n Tem acesso aos relatórios gerados pelos dados inseridos.")
        break
    default:
        console.log("🛑 " + nome + " - Opção Iválida!")
        break
}