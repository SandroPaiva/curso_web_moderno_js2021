/* destricturing é o termo usado para a extração de variaveis dentro de um grupo
como exemplo temos o grupo de variáveis PESSOA e a partir daí será usado o DESTRUCTURING
para extrair e exibir variaveis selecionadas */

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

//se a chamada for para uma variavel que não existe no grupo, o Js trará como Undefined
const { sobrenome, bemHumorada = true} = pessoa
console.log (sobrenome, bemHumorada)

const { endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

