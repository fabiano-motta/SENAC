// Matriz

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
for (let linha = 0; linha < matriz.length; linha++) {
    for(let coluna = 0; coluna < matriz[linha].length; coluna++){
        console.log("Linha: " + linha +" Coluna: " + coluna +
            " Valor: " + matriz[linha][coluna]
        )
    }
}