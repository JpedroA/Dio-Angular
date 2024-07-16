
class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
         return parseInt(this.peso / (this.altura * this.altura));
    }

    falarIMC(){
        const imc = this.calcularIMC()
        return (`Meu nome é ${this.nome} e meu IMC é ${imc}`);
    }
}

const jose = new Pessoa('José', 90, 1.76);
console.log(jose);
console.log(jose.calcularIMC());
console.log(jose.falarIMC());