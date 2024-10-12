# Projeto Para Cadastro de Usuários

- link - Criação BackEnd: https://youtu.be/PyrMT0GA3sE?si=A69Oecq4txJbPH3U
- link - Criação FrontEnd: https://youtu.be/_gHr2Pe5LCY?si=L2B0hNLQW006fm0I

### Objetivos do projeto:

Criar uma API de usuários
1. Criar um usuários.
2. Listar todos os usuários.
3. Editar um usuario.
4. Deletar um usuário.
5. Guardar as informações em um banco de dados.

### Iniciando um projeto Node.js

```
npm init -y
```
"-y" é facultativo. Informa que para todas perguntas sejam __Yes__.

### Instalação de uma biblioteca

```
npm install express
```

Será criado 2 arquivos:

- **package-lock.json**, que é usado com um especie de __cache__, com versões e informações de outras bibliotecas que fazem o Express rodar.
- **node_modules**, contém os arquivos e as pastas informadas no __package-lock.json__.

### criação de um arquivo para uso

Geralmente usa-se **server.js**.


# HTTP Métodos

Sempre que criar um roda, precisa-se informar o que esta rota irá fazer.

1. **get** - Listar (Exemplo de usuários e/ou produtos)
2. **post** - criar
3. **put** - Editar vários vários campos em um mesmo momento.
4. **patch** - Editar uma coisa só.
5. **delete** - deletar

### Status de resposta HTTP:

- 2xx: Quando a requisição esta correto, houve sucesso.
- 300: 
- 4xx: Erros do permissibilidade por parte do cliente
- 5xx: Erros de servidor

# Request

1. Query Params(GET)(Consultas) 

    Modelos de link, onde as requisições são passadas via navegador, onde as variáveis são recebem suas atribuições de através do "=", e usa-se o "&" para concatenação. Manda-se parametros por meio da url

    - servidor.com/usuarios?estado=bahia&cidade=salvador
    - servidor.com/series?tipo=comedia&streaming=netflix

2. Route Params(get | put | delete)(Buscar/deletar ou editar algo específico)

    Acessa um informação especifica como um usuario 22, por exemplo.

    - __get__: servidor.com./usuarios/22
    - __put__: serviro.com/usuarios/22
    - __delete__: servidor.com/usuarios/22

3. Body Params (POST e PUT)

    Enviar informçãoes pelo **body**. Se pela quantidade de informações ou sigilosos.

    ```
        {
            "nome":"fulano",
            "email":"email.com.br"
        }
    ```
    OBS: Formato .json só aceita __""__ para passar texto. Geralmente __''__ pode dar erro.

### Informações Úteis:

Caso as informações passadas via __body__ não esta chegando, é possivel que tenha que adicionar o __use()__ ao código, conforme modelo abaixo.

```
app.use(express.json())
```
Com isso, o script fica ciente que vai chegar dados no formato .json.

# Ajustes

Na hora da importação do express

```
import express from 'express'
```

Pode acontecer um erro comum, como este:

__(node:8424) Warning: To load an ES module, set "type": "module" in the package.json__

Devido a solciitar do uso do modelo mais recente.
Para ajustarmos, basta colocar __"type": "module"__, dentro do arquivo **package.json**, como mostra o exemplo abaixo.
```
{
  "name": "api_bd",
  "version": "1.0.0",
  "type": "module",
  "description": "Teste de conexão usando o node como intermediário entre um BD e o FrontEnd.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.21.0"
  }
}
```


# Rodando o servidor
Modo mais comum, onde cada atualização vamso repcisar reinciiar o servidor
```
node server.js
```
Iniciando o servidor com __--watch__ não se precisa reiniciar o servidor, ele faz isso automaticamente. 
```
node --watch server.js
```

# Banco de Dados

Usado para o projeto o MongoDB ( https://www.mongodb.com/pt-br )

### Biblioteca para uso do Banco de Dados

No projeto foi usado o prisma ( https://www.prisma.io/?via=start&gad_source=1 )

Seguindo o caminho __SET UP PRISMA ORM__, depois em **Connect Your DataBase (MongoDB)**, teremos todos os passos para a configuração.(link direto: https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/mongodb-typescript-mongodb)

### Configurações no MongoDB

No projeto, foi sugerido fazer duas mudanças após a criação do banco de dados

1. Network Access -> edit -> Allow Access From Anywhere
    Libera o acesso par ao banco de dados de qualquer ip e não só pelo ip do dispositivo que foi criado, que por segurança vem apenas permitindo ele mesmo acessar.
2. Database Access -> edit -> built-in role -> atlas admin
    Coloca seu usuário com administrador.

### Passo a passo configurações do Prisma

1. Resumo dos primeiros passos:

Create project setup

As a first step, create a project directory and navigate into it:

```
mkdir hello-prisma
cd hello-prisma
```

Next, initialize a Node.js project and add the Prisma CLI as a development dependency to it:

```
npm init -y
npm install prisma --save-dev
```
This creates a package.json with an initial setup for a Node.js app.

You can now invoke the Prisma CLI by prefixing it with npx:

```
npx prisma
```

Next, set up your Prisma ORM project by creating your Prisma Schema file with the following command:

```
npx prisma init
```

- **OBS**: Caso não apareça o arquivo __.env__ no diretório main do projeto, visite o link:

https://www.prisma.io/docs/orm/more/development-environment/environment-variables/env-files

2. Conexão com o Banco de Dados

Em um dos arquivo criados após o comando **npx prisma init**, usaremos o  **.env** para configurar a conexão.

Voltando a web onde esta seu banco de dados MongoDB, siga as instruções:

clusters ou databases -> connect -> driver -> confira se o "driver" esta em __node.js__ -> Copiar os código mostradio no item 3

OBS: Após copiar o código informado no item 3, lembrar de editar o usuario e senha que esta na url copiada, caos seja necessário.

- Exemplo padrão no arquivo .env:

```
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

- Modelos após configuração de usuario e senha, após cópiar o código do item 3:

```
DATABASE_URL="mongodb+srv://rafaelgouveiamelo:12tPX2rZVjQ5qWsg@primeiraapi.um0xg.mongodb.net/primeiraAPI?retryWrites=true&w=majority&appName=primeiraAPI"
```
OBS: Após o "/" foi colocado o nome do banco de dados: __um0xg.mongodb.net/primeiraAPI?__


3. Connect your database (MongoDB)

Após voltar oa site do **Prisma**, vá em MongoDB e clique no link **Connect your database (MongoDB)**

copia-se a linhas com este código ou similiar:

```
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}
```
Este script é colado no arquivo **prisma/schema.prisma**

4. Creating the Prisma schema (Configurações do Prima ainda)

no site do **Prisma**, vá em MongoDB e clique no link **Creating the Prisma schema**

- O que é um schema !?
    Praticamente é avisar para o banco de dados como é que o formato e paramatrôes que vamos criar,manipular os nossos dados.
    Informações de enviod e rota, o que será enviado e seis tipos.

No arquivo **prisma/schema.prisma**, copie e cole esse script:

- link: https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/mongodb/creating-the-prisma-schema-typescript-mongodb

- Modelo padrão do prisma

```
model User {
  id      String   @id @default(auto()) @map("_id") @db.ObjectId
  email   String   @unique
  name    String?
  address Address?
  posts   Post[]
}
```

- Modelo editado por mim, devido ao meu projeto:

```
model usuario {
  id      String   @id @default(auto()) @map("_id") @db.ObjectId
  email   String   @unique
  name    String?
  address Address?
  posts   Post[]
}
```
- Informações úteis:
    - ? - As interrogações no final, informa que o item não é de preenchiemnto obrigatório.
    - @unique - informa que não pode haver dois emails iguais.

5. Fazer o Push

Precisamos após o passo 4 fazer um __push__ para a informar que as configurações já foram conluidas.

- OBS: Rodar a linha de código abaixo dentro da pasta do projeto.

```
npx prisma db push
```

Caso haja algum erro, já sera informado.

### Instalando o Prisma Client (Install Prisma Client)

- link: https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/mongodb/install-prisma-client-typescript-mongodb

Precisamos instalar usando a linha de código abaixo:

```
npm install @prisma/client
```

Esta instalação é para que se crie um servidor, local host com as informações dos dados. 

Através do script:

```
npx prisma studio
```

O prisma studio cria este servidor, podendo ser navegado através da web, contando as informações dos dados diantes das configurações ajustadas até aqui.

Podendo adicionar informações através da página exibida, rodando o script do prisma studio. E os dados estarão on line, pode ser carregada por qualquer aplicação que use o banco.


# Configurações do nosso script 

A partir daqui vamso começar configurar no script com o banco de dados dentro das premissas do projeto.

Começamos importando o Prisma Client

- link: https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/mongodb/querying-the-database-typescript-mongodb

```
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
```

A variável **prisma** já quarda tudo que tem dentro do primas, facilicanto o andamento do projeto. 

### 1. Criar um usuários.

segue o nosso exemplo do **post** para o projeto:

```
  app.post('/usuarios', async (req,res) =>{

      // Usando o primas

      await prisma.user.create({
          data:{
              email: req.body.email,
              name: req.body.name,
              age: req.body.age 
          }
      })

```
- async e await:

  O **await** significa que o javascript deve esperar um informação. Como se dissesse ao script que aguarde que virá uma informação. Geralmente usado quando se tem aplicações externas, que não esta no nosso controle o tempo de resposta, como é o nosso caso. Esse tipo de script é conhecido como **promisse** ou **requisições assíncronas**.

  Logo, como colocamos o **await**, informamos ao __app__ que a requisição é **async** (assíncrona), para que o __app__ entenda que deve aguardar uma resposta, que pode não ser algo imediato.

- prisma:

  É a nossa variável que contém todos os dados que vem da aplicação externa prisma

- req:

  Informa que que estamos requisitando algo, podendo-se usar **req** ou **request**

- user:

   É o nome que demos ao nosso **model**, dentro do arquivo **schema.prisma**

- create:

  Conforme o modelo pcontido na documentação do prisma, é a forma na qual se passa os dados, respeitando o modelo de informações e seus tipos informados no nosso **model**, dentro do arquivo **schema.prisma**. 

- body:

  Significa de onde virá a informação. No nosso caso, ela esta sendo passada via **body**. Ficando **req.body."key do dicionário"**
  Exemplos:
   email: req.body.email,
   name: req.body.name,
   age: req.body.age


Lembrar se todos os types das váriavéis estão correspondetes, e se o servidor esá correto para minimizar erros.

### 2. Listar todos os usuários.

Colocamos também o **await**, informamos ao __app__ que a requisição é **async** (assíncrona).

colocamos dentro de um váriável constante chamada __users__, para facilitar a chamada do script através da variável.

Seguindo a logica contida no **post**, usamos o primas(veriavel com os dados vidno do prisma).user(nome da nossa model no arquivo schema.prisma).findMany()(É um função que trás tudo que tem de informação na contidar na model __user__ (nome da model atual do projeto) e trará as informações.)   

### 3. Editar um usuário.

Vamos utilizar os __Route Params__ para editar ou deletar apenas um usuário, através do **ID**.

1. Criar uma Nova Rota:

  Até aqui, temos uma rota GET e outra rota Post, criamos uma nova rota como um **Put**.

2. Crindo um novo app com o put

  segue o exemplo e suas alterações
  
  ```
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
        res.status(230).json(req.body) 


        
        res.send('rota put funcionando.')
    })
  ```
  - **/usuarios/:id**
    O __/usuarios__ é a rota e __/:id__ é o nome dado por mim, que pode ser qualquer nome, para usar como uma variável para receber o ID do usuário que queremos alterar algua informação.

  - **Put**
    Parâmetro para alterar apenas um usuáio por vez, indentifciado-o pelo ID

  - **update**
    Significando atualizações deste usuário em questão.

### 4. Excluir um Usuário.

  Conceito bem similar ao do __Put__, com pequenas alterações.

  1. Usaremos o Route Params **Delete**.

  2. Não precisaremos, neste projeto, infromar quais dados epecificos apagar, quremos deletar todas informações do usuário e faremos isso através di ID, como params.

  Exemplo:

  ```
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

  ```



