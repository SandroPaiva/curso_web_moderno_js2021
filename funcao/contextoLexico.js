//O contexto Lexico em uma função determina qual a sequencia de execução de uma função baseando-se no local onde essa função é declarada. No exemplo abaixo vemos a string 'Global', não por acaso tem esse nome, sendo atribuida à constante 'valor' e logo depois a função 'minhaFuncao' sendo declarada e dentro dela a constante 'valor' sendo chamada pelo console.log.
//Mais abaixo a função 'exec' é declarada e dentro dela temos novamente a contante 'valor', desta vez com outra string 'Local' atribuida a ela.
//Nesse caso o contexto lexico determina duas coias. 1- que a contstante 'valor' e a função 'minhaFuncao' são globais, e 2 - que não importa onde a função 'minhaFuncao' seja executada, ela vai procurar a variavel onde ela foi definida, ou seja fora da função 'exec', não importando que a constante valor esteja sendo novamente declarada, de forma local, onde a função 'minhaFuncao' é chamada.
//então o valor de saida da função 'exec' será 'Global'.

const valor='Global';

function minhaFuncao(){
    console.log(valor);
}

function exec(){
    const valor = 'Local';
    minhaFuncao();
}

exec();