/* variaveis definidas como VAR tem escopo global e de função
variaveis definidas com LET tem escopo global, de bloco e função
*/

var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)