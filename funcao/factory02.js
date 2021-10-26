function criaProduto(nome, preco){
    return{
    nome,
    preco,
    desconto: 0.1
    }
}

console.log(criaProduto('Notebook', 3500.54));
console.log(criaProduto('IPhone 10', 5254.54));