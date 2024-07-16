num = 10;
for (let i = 1; i <= 10; i++) {
   console.log(i * num);
}

const pessoa = ['carla', 'maria', 'marcos', 'juca','junior', 'sandra', 'joaquina', 'silvio']

for (let i = 0; i < pessoa.length; i++) {
    let view = pessoa[i];
    console.log(view);
    console.log(view.length);
}

const listNum =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i <= listNum.length; i++) {
    if (listNum[i] % 2 === 0) {
        console.log(`o numero ${listNum[i]} é par`);
    }
}