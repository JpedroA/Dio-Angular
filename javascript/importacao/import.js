
const ImputNum = [5, 10, 15, 45, 98, 100];
let i = 0;
function gets() {
    let valor = ImputNum[i];
    i++
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print }; // exportacao de funcoes para outras partes da aplicação