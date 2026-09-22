class Funcionario {
    constructor(nome, salario, mesesTrabalhados) {
        this.nome = nome
        this.salario = salario
        this.mesesTrabalhados = mesesTrabalhados
    }
    calcularTotal() {
        return this.salario * this.mesesTrabalhados
    }
     mostrarFuncionario(){
        console.log("Nome: " + this.nome)
        console.log("Salário: " + this.salario)
        console.log("Meses Trabalhados: " + this.mesesTrabalhados)
        console.log("Valor Total R$: " + this.calcularTotal())
     }
}

let funcionario1 = new Funcionario("Carlos", 2500, 6)
funcionario1.mostrarFuncionario()