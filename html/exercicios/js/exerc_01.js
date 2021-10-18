//Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.
function calculos(a, b){
    const calculo = [];
    calculo[0] = a+b;
    calculo[1] = a-b;
    calculo[2] = a*b;
    calculo[3] = a/b;

    return `Numeros dados: ${a} e ${b}
    Soma: ${calculo[0]}
    Subtração: ${calculo[1]}
    Multiplicação: ${calculo[2]}
    Divisão: ${calculo[3]}`;
}

console.log(calculos(3,2));