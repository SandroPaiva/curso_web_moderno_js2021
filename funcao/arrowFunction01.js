let dobro = function(a){ //função tradicional 
    return 2*a;
}

dobro = (a) => { //função reduzida com a Arrow Function
    return 2*a;
}

dobro = a => 2*a; //quando a função possui um único parmâmetro e apenas uma operação simples dentro 
                  //dela, pode-se abolir os "()" e as "{}" e o return se torna implicito
console.log(dobro(Math.PI));

let ola = function(){
    return 'Olá';
}
ola = () => 'Olá';
ola = _ => 'Olá'; //possui um parametro
console.log(ola());
