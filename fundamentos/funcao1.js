//Função sem retorno, quando não se atribui um valor inicial aa algum parametro da função
function imprimirSoma(a, b) {
    console.log(a+b)
}
imprimirSoma(2, 3) //soma quando a origem de dados tem numeros
imprimirSoma(2) //retorna NaN (not a number) quando uma das origens é nula
imprimirSoma("momo", "ziiiiimm") //concatena quando as duas origens é texto
imprimirSoma("Teste", 2)//concatena quando as uma das origens é texto

//Função com retorno, quando se atribui um retoro ja dentro da função 

function soma(a, b=1) {
    return a + b
}

console.log(soma(2, 3)) //o 2 é atribuido para o "a" e o 3 para o "b" mesmo esse já tendo um valor atribuido
console.log(soma(2)) ///o 2 é atribuido para o "a" que é somado ao valor já atribuido na função "soma".
console.log(soma("Bom ", "dia!"))//concatena quando as duas origens é texto