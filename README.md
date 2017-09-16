# Challenge Full-stack

MEAN Stack application.

# Features
Ao finalizar o desafio, o usuário deverá estar habilitado a cadastrar os clientes no formulário, e ao salvar, atualizar o mapa com o ponto daquele cadastro e a tabela com os dados do cliente. Na tabela há um botão para excluir o cliente, que deverá removê-lo do banco, mapa e tabela.

```REST
POST /deliveries
        name: { type: String },
        weight: { type: Number, min: 0 },
        address: {
            address: { type: String},
            number: {type: String},
            district: {type: String },
            complement: {type: String },
            city: {type: String, default },
            state: {type: String, default },
            country: {type: String, default] },
            geolocation: {
                longitude: {type: Number, min: -180, max: 180},
                latitude: {type: Number, min: -90, max: 90},
            },
        }
```

``` REST
 GET /deliveries
 recive all deliveries
```

A requisição GET para /deliveries deve trazer um json com as informações das deliveries que existem no banco e exibí-las no mapa e na tabela.

``` REST
 DELETE /deliveries/:id
 delete a deliveries with id
```

Há um botão na tabela para excluir a delivery. Ele deverá remover todos os clientes tanto do banco quanto do mapa/tabela.

### Installation

This app requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ git clone this-repository-url
$ npm install
$ npm start
$ chrome localhost:3000/
```

