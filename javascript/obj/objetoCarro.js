
class Car {
    marca;
    modelo;
    cor;
    KmPorLitro;
    KmRodado;

    constructor(marca, modelo, cor, KmPorLitro, KmRodado){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor; 
        this.KmPorLitro = KmPorLitro;
        this.KmRodado = KmRodado;
    }
    exibirCarrro(){
        return(`O carro é da marca ${this.marca}, modelo ${this.modelo}, na cor ${this.cor}, e faz ${this.KmPorLitro}Km por litro`)
    }

    gasto(){
        const viagem = (precoCombustivel*this.KmRodado)/this.KmPorLitro;
        return `o gasto na viagem foi R$ ${parseInt(viagem)}`;
    }
}
precoCombustivel = 10;

let carros = [];
const hb20 = new Car('hyadai', 'HB20','Branco', 15, 200);
carros.push(hb20);
console.log(carros)
const siena = new Car('Fiat', 'Siena', 'Preto', 10, 300);
carros.push(siena);
console.log(carros)
