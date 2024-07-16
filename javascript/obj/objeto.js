
class Pessoa { // classe pessoa
    nome; // atributos da classe
    idade;
    anoNascimento;
    constructor(nome, idade){ // passando parametros ao construtos da classe que devem ser adcionados ao instanciar um novo obj
        this.nome = nome;
        this.idade = idade
        this.anoNascimento = 2024 - idade;
    }

    descreve() {
        console.log(`meu nome é ${this.nome}, tenho ${this.idade} anos`); // funcoes no obj sao chamados metodo
    }
}


const User = new Pessoa('Pedro', 24);  // instancia, criar um novo obj da classe e nomeando os atributos
console.log(User); // observar os atributos obj no console
console.log(User.descreve()); // metodo apresentacao

function etariedade(pessoa1, pessoa2) {
    if (pessoa1.idade > pessoa2.idade)  {
        console.log(`${pessoa1.nome} é mais velho que ${pessoa2.nome}`);
    } 
    else if (pessoa2.idade > pessoa1.idade) {
        console.log(`${pessoa2.nome} é mais velho que ${pessoa1.nome}`);
    } 
    else{
      console(`${pessoa1.nome} e ${pessoa2.nome} tem a mesma idade`)
    }
}

user1 = new Pessoa('Cleiton',14);
user2 = new Pessoa('Enzo', 13);

etariedade(user1, user2);
