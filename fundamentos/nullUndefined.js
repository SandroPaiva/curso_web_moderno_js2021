let valor //não inicializada, indefinida
console.log (valor) //ao imprimir uma variavel não inicializada, ou seja, sem valor, aparecerá undefined

valor = null //ausencia de valor, mas está iniciando a variavel com um valor nulo ou vazio
console.log (valor)

//console.log (valor.toString()) //Erro!!!

const produto ={}
console.log(produto.preco) //impressão do obsejto produto sem definir o conteúdo de um atributo, porém, não foi definido
console.log(produto)

produto.preco = 3.50 //atribuindo um valor para o atributo
console.log(produto)

produto.preco = undefined //evitar atribuir 'undefined'
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preco
console.log(!!produto.preco)
console.log(produto)