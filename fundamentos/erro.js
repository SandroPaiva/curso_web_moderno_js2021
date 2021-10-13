function tratarErroELancar(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    
    /* será tratado o erro com o THROW onde se pode identificar o nome do erro, a mensagem e a data que acoanteceu */
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    /*TRY usado para iniciar o tratamento para casos que possivelmente pode causar algum erro*/
    try{
     console.log(obj.name.toUpperCase() + '!!!')    
    /*O CATCH é o que inicia o processo de identificação do erro e o envia para o THROW onde se pode manipular o que 
    pode ser feito, por exemplo, exibir uma mensagem amigavel para melhor entendimento do erro*/
    } catch (e){
        tratarErroELancar(e)

    }finally{
        console.log('final')
    }
   
}
/*foi utilizado a palavra 'nome' ao invés de 'name' para gerar o erro*/
const obj = {name: 'Roberto'}
imprimirNomeGritado(obj)