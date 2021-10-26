//closure é o escopo criado quando uma função é declarada
//esse escopo permite a função acessar e manipular variáveis externas à função
//no exemplo abaixo temos duas declarações para a contante 'x', uma com a string 'Global', outra com a string 'Local'.
// o escopo closure tem o mesmo sentido do contexto lexico, e se a função é iniciada em um local, quando for chamada é desse local que ela vai puxar a informação.

const x='Global';

function fora(){
    const x = 'Local';
    function dentro (){
        return x;
    }
    return dentro;
};

//aqui a função 'fora' está sendo atribuida para uma constante chamada 'minhaFuncao' que depois é chamada, se observar, dentro da função 'fora' existe a segunda declaração da constrante 'x' que é chamada dentro da função 'dentro'. Nesse momento o contexto lexico se faz presente, pois a função executa seu escoppo e puxa a constante que faz parte de seu contexto naquele momento, ignorando o primeiro 'x' que foi declarado em regime global.

const minhaFuncao = fora();
console.log(minhaFuncao());