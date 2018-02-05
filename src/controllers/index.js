var models = require('../models')();


module.exports = function () {
    var customer = require('./customer')(models);
    var show = require('./show')(models);
    return {
        customer,
        show
    }
}