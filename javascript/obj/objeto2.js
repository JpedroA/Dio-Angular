
class aluno {
    nome;
    dataNasc;
    matricula;
    status;
    
    constructor(nome, dataNasc, matricula, status){
        this.nome = nome;
        this.dataNasc = dataNasc;
        this.matricula = matricula;
        this.status = status;
    }

    verificarAluno(nome, status){
        if (this.status === "ativo") {
           return(` O aluno ${this.nome} está matriculado`);
        } else if (this.status === "inativo"){
            return(`o aluno ${this.nome} ja formou ou evadiu`);
        } else {
            return('aluno não contrado')
        }
    }
}

const estudante = new aluno('João Pedro', "16/02/2000", 21204865, "inativo" );
console.log(estudante);
console.log(estudante.verificarAluno());

const colegiado = new aluno('Jessica', "16/11/2001", 100000000, "" );
console.log(colegiado);
console.log(colegiado.verificarAluno());

