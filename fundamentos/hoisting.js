/*Histing é o comportamento padrão do javascript de mover as declarações VAR para o topo
não funciona com LET*/

console.log('a =', a)
var a = 2
console.log('a =', a)

console.log('b =', b)
let b = 2
console.log('b =', b)

