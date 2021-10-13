function compras(trabalho1, trabalho2){
    /* o operador "||" indica "OU" */
    const comprarSorvete = trabalho1 || trabalho2
    /* o operador "&&" indica "E" */
    const comprarTV50 = trabalho1 && trabalho2
    /* o operador "!=" indica diferente. */
    const comprarTV32 = trabalho1 != trabalho2
    /* o "!" é operador de negação, tudo que vier depois dele será negado */
    const manterSaudavel = !comprarSorvete //operador unário

    return { comprarSorvete, comprarTV50, comprarTV32, manterSaudavel}
}

console.log (compras(true, true))
console.log (compras(true, false))
console.log (compras(false, true))
console.log (compras(false, false))