//Configuração do servidor para receber a requisição do "/cliente" do tipo POST
const express = require('express')
const app = express()
//recupera as informações do formulario e armazena no request.body
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended:true}))

//atender as requisições das URLs
app.post('/usuarios', (req, resp) => {
    //para saber o que chegou no body
    console.log(req.body)
    //resposta de sucesso de envio
    resp.send('<h1>Parabéns, usuario incluído!</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    //para saber o que chegou no body
    console.log(req.params.id)
    console.log(req.body)
    //resposta de sucesso de envio
    resp.send('<h1>Parabéns, usuario alterado!</h1>')
}

app.listen(3003)