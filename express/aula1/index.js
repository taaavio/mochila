const express = require('express')
const app = express()

// O METODO GET GERALMENTE E UTILIZADO PARA RETORNAR INFORMAÇOES
app.get('/clientes', (req, res)=>{
    console.log('bateu na rota de listar todos os clientes')
        const todosOsClientes = [
            {
                id:1,
                nome:'Otavio Augusto',
                idade: 20
            },

             
            {id:2,
             nome:'Rosemeire Da Silva',
             idade:56
            }
        ]
        res.json(todosOsClientes)
})

// O METODO POST É GERALMENTE USADO PARA INSERIR INFORMAÇOES
app.post('/clientes', (req, res)=>{
    console.log('bateu na minha rota de post')
})

app.listen(3333, () => {
    console.log('O servidor foi iniciado com sucesso!')
})




