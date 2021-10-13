//define um array com 4 posições e valores já atribuidos
const valores = [7.7, 8.9, 6.3, 9.2]
//imprime os valores exsitentes nas posições 0 e 3 do array
console.log(valores[0], valores[3])
//no exemplo abaixo a posição 4 do array não existe então imprimirá "undefined"
console.log(valores[4])

//cria a posição 4 e atribui o valor 10
valores[4] = 10
//imprime todas os valores das posições do array
console.log(valores)
//imprime a quantidade (comprimento) do array
console.log(valores.length)

//adiciona novos itens e posições no array
valores.push({id: 3}, false, null, 'teste')
console.log(valores)
console.log(valores.length)

//remove o valor e a posição final do array e imprime o que foi removido
console.log(valores.pop())
//deleta somente o valor de uma posição especifica do array, quando exibido mostra <x empty item> onde 'x' é a quantidade de posições vazias
delete valores[0]
console.log(valores)

//exibe o tipo do array com o 'typeof'
console.log(typeof valores)