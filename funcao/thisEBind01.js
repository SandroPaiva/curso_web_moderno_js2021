const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar();
const falar = pessoa.falar;
falar();//conflito entre paradigmas: linguagem funcional e linguagem OO

const falarDePessoa = pessoa.falar.bind(pessoa);//permite que um this local possa ser chamado mesmo sendo atribuido a uma variável.
falarDePessoa();