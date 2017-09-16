var app = require('./config/express.js')();


var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


var routes = require('./routes')();

for (let routeName in routes) {
    app.use('/'.concat(routeName), routes[routeName]);
}


