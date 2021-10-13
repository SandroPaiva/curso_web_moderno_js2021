let comparaComThis = function (param) {
    console.log(this === param);
}

comparaComThis(global);

const obj = {}

comparaComThis = comparaComThis.bind(obj);//atribuindo a função global ao obj
comparaComThis(global); //chamada não é mais válida, retornará false
comparaComThis(obj); // agora o this está atribuido ao obj deixando de ser global

let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global);
comparaComThisArrow(module.exports);

comparaComThisArrow = comparaComThisArrow.bind(obj);//tentando atribuir com bind ao obj
comparaComThisArrow(obj); //retornará false, pois o arrow function é priorizado e não deixa que essa atribuição aocnteça
comparaComThisArrow(module.exports);