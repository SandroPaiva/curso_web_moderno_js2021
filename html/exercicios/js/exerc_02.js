/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).*/

function tipoTriangulo(a, b, c){
    if (a == b && a == c){
        return `Lado A: ${a}, Lado B: ${b}, Lado C: ${c} --> Equilátero`;
    }else if (a!== b && a==c || a==b && a!=c || c==b && c!=a){
        return `Lado A: ${a}, Lado B: ${b}, Lado C: ${c} --> Isóceles`;
    }else{
        return `Lado A: ${a}, Lado B: ${b}, Lado C: ${c} --> Escaleno`;
    }
}

console.log(tipoTriangulo(2,2,2));
console.log(tipoTriangulo(1,2,2));
console.log(tipoTriangulo(2,1,2));
console.log(tipoTriangulo(2,2,1));
console.log(tipoTriangulo(1,2,3));