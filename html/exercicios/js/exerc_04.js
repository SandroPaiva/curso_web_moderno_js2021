/* Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.*/

function divid_divis(a,b){
    const divid = a/b;
    const divis = a%b;
    return `${a} dividido por ${b} é igual a ${divid} e o resto é ${divis}`
}

console.log(divid_divis(14,5));