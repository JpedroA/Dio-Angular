// const nome = 'Joao Pedro Alves Paulino'

// for (let index = 0; index < nome.length; index++){
//     console.log(nome[index]);
// }   

const notas = [];
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(4);
console.log('passou por aqui')
notas.push(6);
notas.push(3);

soma = 0;
console.log('chegou aqui')
for (let i = 0; i < notas.length; i++){
    console.log('entrou no for')
    const nota = notas[i];
    soma = soma + nota;

}
console.log('saiu do for')
console.log(soma);
const media = soma / notas.length;
console.log(media);
