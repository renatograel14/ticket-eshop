
module.exports = function () {
    var customer = require('./customer');
    var show = require('./show');

    return {
        customer,
        show
    }
}