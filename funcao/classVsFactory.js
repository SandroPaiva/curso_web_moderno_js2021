//cria a classe Pessoa
class Pessoa{
    //cria o construtor de objeto, o this faz com que 'nome' se torne global
    constructor(nome){
        this.nome = nome;
    }
    //classe que exibe o novo objeto
    falar(){
        console.log(`Meu nome é ${this.nome}!`);

    }
}

//chamada para a criação do novo objeto.
const p1 = new Pessoa('João');
p1.falar();


//fazendo a mesma coisa usando Arrow Function
const criarPessoa = nome => {
    return{
        //não é nessessário usar o 'this' pois nesse contexto o 'nome' já vira global
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

//sem necessidade de usar o new para criar um novo objeto
const p2 = criarPessoa('Pedro');
p2.falar();