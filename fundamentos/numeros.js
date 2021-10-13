const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

//para fixar as casas decimais usamos toFixed(numero_desejado)
console.log(media.toFixed(2))

//o comamdo toString() transforma em string o valor numerico 
//se colocar o valor 2 para a conversão da string ele retorna o binário do numero
console.log(media.toString(2))
console.log(typeof media)