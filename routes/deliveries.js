var express = require('express');
var routes = express.Router();

var deliveriesController = require('../controllers')().deliveries;

module.exports = function () {
    routes
        .route('/')
        .get(deliveriesController.getAll)
    return routes
}