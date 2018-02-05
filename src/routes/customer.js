var express = require('express');
var routes = express.Router();

var customerController = require('../controllers')().customer;

routes.use(function (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

routes
  .route('/')
  .get(customerController.getAll)
  .post(customerController.insert);

routes
  .route('/:id/cart')
  .post(customerController.insertToCart);

routes
  .route('/:id/purchase')
  .post(customerController.completePurchase);

routes
  .route('/:id')
  .delete(customerController.delete);


module.exports = routes;