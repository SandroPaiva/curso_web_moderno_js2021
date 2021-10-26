//function declaration, forma de declaração de função que permite que ela seja chamada em qualquer local do código indepndente de onde esteja. pois ao carregar o código, o interpretador JS identifica e carrega junto todas as funções delcaradas dessa forma. o exemplo disso é que a função soma está sendo chamada antes de sua declaração;

console.log(soma(3,4));

function soma(x, y){
    return x+y;
}

//function expression, nesse caso por ser uma função atribuida a uma variável e ser uma função not named, apenas após a declaração ela pode ser chamada, caso contrário ocorrerá um erro de variável não declarda.


const sub = function(x,y){
    return x - y;
}

console.log(sub(4,2));


//named function expression, da mesma forma que uma função not named este exemplo mostra uma função nomeada sendo atribuida a uma variável e sua chamada deve ser feita apenas após sua declaração;
const mult = function mult(x,y){
    return x*y;
}

console.log(mult (4,2));