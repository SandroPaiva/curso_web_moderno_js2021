const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// usando BREAK para sair da estrutura FOR quando a condição do IF estiver satisfeita, 
// USADA PARA SAIR DO FLUXO

console.log("FOR usando BRAKE!")
for(x in nums){
    if (x == 6) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

// usando CONTINUE para sair da estrutura FOR quando a condição do IF estiver satisfeita, 
// USADA PARA CONTINUAR PARA O PROXIMO FLUXO

console.log("FOR usando CONTINUE!")
for(y in nums){
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

//USANDO UM RÓTULO PARA DEFINIR ONDE O BRAKE FARÁ A SAÍDA DA ESTRUTURA, NO CASO O RÓTULO É extrerno
externo: for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo //AQUI É REFERENCIADO O RÓTULO
        console.log(`Par = ${a}, ${b}`)
    }
}

console.log('FIM!')