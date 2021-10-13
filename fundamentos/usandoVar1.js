{
    {
        {
            { 
                var sera = 'Será?'
                console.log(sera)
            }
        }
    }
}
/* a variáverl definida com VAR pode ser vizualisada em qqr local do código desde que não esteja
dentro de um função */

console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

teste()
console.log(local)