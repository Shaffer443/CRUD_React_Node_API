import express from 'express'
import { PrismaClient } from '@prisma/client'

// Variável para uso do prisma client
const prisma = new PrismaClient()

// Variável constante para usar o express:
const app = express()
app.use(express.json())

// Rota é uma informação de resposta e requisição. 
// Chamando a variável e seus metodos http
//Nas requsições de rota, precisamos Informar duas coisas tipo/rota (get,post,put, etc) e endereço("/usuarios","/cadastro" e afins)

//Variável que vai receber os dados momentâneamente. 
//const usuario = [] // descontinuada após a criação do get via prisma

// metodo 'post' usado para passar dados,neste caso, para a variável constante: usuario, em formato .json
app.post('/usuarios', async (req,res) =>{

    // Usando o primas

    await prisma.user.create({
        data:{
            email: req.body.email,
            name: req.body.name,
            age: req.body.age 
        }
    })

    //Empurrando o que tem dentro do body para variável usuario
    usuario.push(req.body)
    res.status(220).json(req.body) //Retorna, no caso, o usuario cadastrado/criado.
    
    //Verificando o que vem dentro do req (requisição)
    //console.log(req)

    //Verificando o que vem dentro do req (requisição) body (através do terminal ou similares)
     //console.log(req.body)

    //Verificando as informações contidas na variável usuario
    //req.post(usuario)
    

    
    res.send('rota post /usuarios funcionando...')
})


//Pegando todas as informações da rota /usuarios
//metodo 'get' é sempre o método padrão para buscar informações 
app.get('/usuarios', async (req,res) =>{
    //Teste de informações advindo da rota
    //res.send('rota get /usuarios funcionando...')

    // Usando o prisma
    const users = await prisma.user.findMany()
    res.status(210).json(users)
    res.send(`${users}`) 

    //listar o conteudo da variável usuario, vindo de um forma .json
    //res.status(210).json(usuario)
    //res.send(`${usuario}`)    

})

//Alterando dados de um usuário através do ID
app.put('/usuarios/:id', async (req,res) =>{

    // Usando o primas
    await prisma.user.update({
        //indicando onde será a atalização
        where:{
            //variável apra receber o ID do BD através do params
            id: req.params.id
        },
        data:{
            email: req.body.email,
            name: req.body.name,
            age: req.body.age 
        }
    })

    //Empurrando o que tem dentro do body para variável usuario
    //usuario.push(req.body)
    res.status(230).json(req.body) //Retorna, no caso, o usuario editado/deletado


    
    res.send('rota put funcionando.')
})


//Deletando dados de um usuário através do ID
app.delete('/usuarios/:id', async (req,res) =>{

    // Usando o primas
    await prisma.user.delete({
        //indicando qual será o usuário a ser deletado
        where:{
            //variável apra receber o ID do BD através do params
            id: req.params.id
        }
    })

    //Empurrando o que tem dentro do body para variável usuario
    //usuario.push(req.body)
    //res.status(240).json(req.body) //Retorna, no caso, o usuario editado/deletado
    res.status(200).json({message: "Usuário Deletado com Sucesso !"})

    
    res.send('Delete funcionando.')
})


app.listen(3030, () => {
    console.log("Servidor Rodando na porta 3030");
});
