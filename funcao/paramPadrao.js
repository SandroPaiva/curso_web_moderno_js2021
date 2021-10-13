//gerando valor padrão, onde com o operador '||' será passado que, se um valor não for passado como parâmetro será asumido o que o operador '||' estiver esperando que no exemplo é o numero 1. 
function soma01(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c;
}
console.log(soma01());
console.log(soma01(3));
console.log(soma01(1,2,3));
console.log(soma01(0,0,0));// nesse caso o Zero é um valor nulo, sendo assim o valor padrão 1 será assumido.

//Outra forma de gerar um valor padrão é erificar se os parametros pedidos atendem as condições
function soma02(a,b,c){
    a=a !== undefined ? a : 1 ; //se o parametro esperado for diferente de undefined, use o valor do parametro, caso contratio use o numero 1
    b=1 in arguments ? b : 1; //se a posição citada fizer parte do parametro e tiver um valor, use o valor do parametro, caso contratio use o numero 1
    c= isNaN(c) ? 1 : c; //se o parametro esperado não for um número, use o valor do parametro, caso contratio use o numero 1
    return a+b+c;
}
console.log(soma02());
console.log(soma02(3));
console.log(soma02(1,2,3));
console.log(soma02(0,0,0));//nesse caso o Zero é tratado como numero.

//valor padrão do ES2015
function soma03(a=1, b=1, c=1){
    return a+b+c;
}
console.log(soma03());
console.log(soma03(3));
console.log(soma03(1,2,3));
console.log(soma03(0,0,0));//nesse caso o Zero é tratado como numero.