var express = require('express');
var routes = express.Router();

var deliveriesController = require('../controllers')().deliveries;

routes.use(function (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

routes
  .route('/')
  .get(deliveriesController.getAll)
  .post(deliveriesController.insert);

routes
  .route('/:id')
  .delete(deliveriesController.delete);


module.exports = routes;