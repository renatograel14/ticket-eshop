var mongoose = require('mongoose');


module.exports = function () {
    var connection = mongoose.createConnection('mongodb://localhost:27017/challenge');
    return connection;
}