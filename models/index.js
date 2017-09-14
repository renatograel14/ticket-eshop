var db = require('../config/mongo.js')();

module.exports = function () {
    var Delivery = require('./deliveries')(db);
    return {
        Delivery
    }
}