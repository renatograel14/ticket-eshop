var express = require('express');
var routes = express.Router();

var showController = require('../controllers')().show;

routes.use(function (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

routes
  .route('/')
  .get(showController.getAll)
  .post(showController.insert);

routes
  .route('/:id')
  .delete(showController.delete);


routes
  .route('/:showId/:gigId')
  .post(showController.createTickets);


module.exports = routes;