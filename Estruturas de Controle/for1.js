let contador = 1

console.log('Com While!')
while (contador <=10){
    console.log(`contador = ${contador}`)
    contador++
}

console.log('Com For!')
for (let i = 1; i <=10; i++){
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7, 10, 8.1, 5.5, 3.1]

console.log('Percorrendo um Array com o FOR!')
for (i = 0; i < notas.length; i++){
    console.log(`nota = ${notas[i]}`)
}