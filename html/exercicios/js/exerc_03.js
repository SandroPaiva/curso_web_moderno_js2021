/* Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.*/

function exponenciacao(base, expoente){
    const calculo = base**expoente;
    return `${base} elevado a ${expoente} é igual à ${calculo}`;
}
console.log(exponenciacao(9, 2));