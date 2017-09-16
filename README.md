# Challenge Full-stack

MEAN Stack application.

# API

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

``` REST
 DELETE /deliveries/:id
 delete a deliveries with id
```

### Installation

This app requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ git clone this-repository-url
$ npm install
$ npm start
$ chrome localhost:3000/
```

