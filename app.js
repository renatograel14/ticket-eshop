var app = require('./config/express.js')();
var routes = require('./routes');

for (let routeName in routes) {
    app.use('/'.concat(routeName), routes[routeName]);
}