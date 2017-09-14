var models = require('../models');


module.exports = function () {
    var deliveries = require('./deliveries')(models);
    return {
        deliveries
    }
}