console.log(Math.ceil(6.2))

const obj1={}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome //o bjjeto THIS permite que o atributo possa ser referenciado fora da função.
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()