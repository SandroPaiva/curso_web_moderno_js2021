const notas = [6.7, 7.4, 9.8, 8.1, 7.7, 10, 8.1, 5.5, 3.1]
//O "IN" exibirá em qual indoce do array está determinado valor

console.log("Cada indice do array será mostrado quando o IN estiver sendo usado com o FOR")
for (let i in notas){
    console.log(`${i} - ${notas[i]}`)
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}