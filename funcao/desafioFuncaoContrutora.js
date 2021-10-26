function Pessoa (nome){
        this.nome = nome;

        this.falar = function(){
            
        console.log(`Meu nome é ${this.nome}!`);

    }
}

//chamada para a criação do novo objeto.
const p1 = new Pessoa('João');
p1.falar();