function Pessoa(){
    this.idade = 0;

    const self = this;//pode-se usar a atribuição a uma constante para usar o this sem precisar do Bind
    setInterval(function(){ //setIterval é usado para executar o que for atribuido a ela depois de um tempo
        self.idade++;
        console.log(self.idade);
    }/*.bind(this)*/,1000);
};

new Pessoa;