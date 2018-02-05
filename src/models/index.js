var db = require('../config/mongo.js')();
var Customer = require('./customer')(db);
var Show = require('./show')(db);

module.exports = function () {
    return {
        Customer,
        Show
    }
}