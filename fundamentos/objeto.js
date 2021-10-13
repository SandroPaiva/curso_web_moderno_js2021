//'{}' indica criação de objeto
//criação de um objeto sem atributos
const prod1 = {}
//atribuição do conteudo do objeto
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['desconto legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

//criação de objeto com atributos
const prod2 = {
    nome: 'Camisa polo',
    preco: 79.90
}

console.log(prod2)