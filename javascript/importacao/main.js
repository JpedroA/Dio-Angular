
const funcoes = require ('./import');
const numerosSorteados = [];
let maiorValor = 0;

for (let i = 0; i < 5; i++) {
    let numerosSorteado = funcoes.gets();
    numerosSorteados.push(numerosSorteado);
}

for (let i = 0; i < numerosSorteados.length; i++) {
    const numerosSorteado = numerosSorteados[i];
    if (numerosSorteado > maiorValor) {
        maiorValor = numerosSorteado;
    }
}
numerosSorteados.pop(maiorValor);
console.log(maiorValor);
console.log(numerosSorteados);