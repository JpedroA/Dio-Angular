let nome = 'Joao Pedro';

function escreverMeuNome(nome){
    console.log(`seu nome é: ` + nome);
}

function verificarIdade(idade){
    if (idade < 18) {
        console.log(`voce tem: ${idade} anos, pontanto é menor de idade`);
    }else{
        console.log(`voce tem: ${idade} anos, portanto é maior de idade`);
    }
}
escreverMeuNome(nome);
verificarIdade(18);