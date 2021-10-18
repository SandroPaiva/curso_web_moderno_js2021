/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.*/
function jurosSimples(capini,taxjur,tempapl){
    let montante01 = capini+(capini*taxjur*tempapl);
    return new Intl.NumberFormat('pt-BR',{style:'currency', currency: 'BRL'}).format(montante01);
}

function jurosComposto(capini,taxjur,tempapl){
    let montante02 = capini+(capini*(1+taxjur)**tempapl);
    return new Intl.NumberFormat('pt-BR',{style:'currency', currency: 'BRL'}).format(montante02);
}
console.log(jurosSimples(2500,0.05, 12));
console.log(jurosComposto(2500,0.05, 12));