function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado com LET
    let velocidadeAtual = 0;

    //método público com THIS
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta;
        }else {
            velocidadeAtual = velocidadeMaxima;
        }
    }
    //método publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual;
    }
}

const uno = new Carro;
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
