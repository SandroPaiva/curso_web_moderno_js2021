const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

//Sem callback
const notasBaixas01 = [];
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas01.push(notas[i])
    };
};

console.log("Função tradicional com um FOR e um IF: "+ notasBaixas01);

//Com callback
const notasBaixas02 = notas.filter(function(nota){
    return nota <7;
});
console.log("Usando o callback, que não precisa de FOR nem IF: "+ notasBaixas02);

//Com callback e arrow function
const notasBaixas03 = notas.filter(nota => nota < 7);
console.log("Usando o mesmo callback junto com arrow function: "+ notasBaixas03);