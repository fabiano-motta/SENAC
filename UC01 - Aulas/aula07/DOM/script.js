
function mostrarPares() {
    let inicio = Number(document.getElementById("inicio").value)
    let fim = Number(document.getElementById("fim").value)
    let resultado = ""

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 == 0) {
            resultado += i + " é par<br>"
        }
    }
    document.getElementById("resultado").innerHTML = resultado
}

function tabuadaMultiplicar() {
    let numero = Number(document.getElementById("numero").value)
    let resultado = ""
    let i = 1
    while (i <= 10) {
        resultado += numero + " X " + i + " = " + (numero * i) + "<br>"
        i++
    }
    document.getElementById("resultado").innerHTML = resultado

}