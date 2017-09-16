var mongoose = require('mongoose');

module.exports = function () {
    mongoose.Promise = global.Promise;
    const dbURI = 'mongodb://localhost:27017/challenge';
    var _connection = mongoose.connect(dbURI, {
        useMongoClient: true,
    });


    // When successfully connected
    _connection.on('connected', function () {
        console.log('Mongoose default connection open to ' + dbURI);
    });

    // If the connection throws an error
    _connection.on('error', function (err) {
        console.log('Mongoose default connection error: ' + err);
    });

    // When the connection is disconnected
    _connection.on('disconnected', function () {
        console.log('Mongoose default connection disconnected');
    });

    // If the Node process ends, close the Mongoose connection 
    process.on('SIGINT', function () {
        _connection.close(function () {
            console.log('Mongoose default connection disconnected through app termination');
            process.exit(0);
        });
    });
    process.on('SIGTERM', function () {
        _connection.close(function () {
            console.log('Mongoose default connection disconnected through app termination');
            process.exit(0);
        });
    });
    process.once('SIGURS2', function () {
        _connection.close(function () {
            console.log('Mongoose default connection disconnected through app termination');
            process.kill(process.pid, 'SIGURS2');
        });
    });

    return _connection;
}