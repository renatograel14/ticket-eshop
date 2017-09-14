var express = require('express');
var path = require('path');

module.exports = function () {
    var app = express();

    app.set('port', 3000);

    app.use(function (req, res, next) {
        console.log(req.method, req.url);
        next();
    });

    app.use(express.static(path.join(__dirname, '../public')));
    app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));


    var server = app.listen(app.get('port'), () => {
        var port = server.address().port;
        console.log(`App listening on port ${port}.`);
    })

    return app;
}