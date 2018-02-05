
var _ = require('lodash');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var createHash = require('hash-generator');

module.exports = function (models) {
    var controller = {}
    var CustomerModel = models.Customer;

    controller.getAll = function (req, res) {
        CustomerModel.find((err, result) => {
            if (result.length) {
                res
                    .status(200)
                    .json(result)
            } else {
                res
                    .status(200)
                    .json([]);
            }
        });
    }

    controller.insert = function (req, res) {
        var newCustomer = new CustomerModel(req.body);
        newCustomer.save()
            .then(success => {
                res
                    .status(200)
                    .json(success);
            },
            err => {
                console.log(err);
                res
                    .status(400)
                    .json(err)
            })
    }

    controller.delete = function (req, res) {
        var customerId = req.params.id
        CustomerModel
            .findByIdAndRemove(customerId)
            .exec((err, result) => {
                if (err) {
                    res
                        .status(400)
                        .json(err);
                } else {
                    res
                        .status(200)
                        .json(result);
                }
            });
    }

    controller.insertToCart = function (req, res) {
        var customerId = req.params.id
        var items = _.flattenDepth([req.body.items]);
        CustomerModel
            .findById(customerId)
            .exec((err, customer) => {
                if (err) {
                    res
                        .status(400)
                        .json(err);
                } else {
                    if(customer.cart.show) {
                        if (customer.cart.show.toString() !== req.body.show) {
                            return  res
                                .status(400)
                                .json("another show has been added before");
                        }
                    } else {
                        console.log(req.body.show);
                        customer.cart.show = req.body.show;
                    }
                    customer.cart.items.push(...items);
                    customer.save()
                        .then(success => {
                            res
                                .status(200)
                                .json(success);
                        },
                        err => {
                            console.log(err);
                            res
                                .status(400)
                                .json(err)
                        });
                }
            });
    }

    controller.completePurchase = function(req, res) {
        var customerId = req.params.id
        var paymentInfo = req.body.items;

        CustomerModel
            .findById(customerId)
            .exec((err, customer) => {
                if (err) {
                    res
                        .status(400)
                        .json(err);
                } else {

                    var ticketsValidatedWithCode = _.flatMap(customer.cart.items, (item) => {
                        var ticketsValidated=[];
                        for(var i = 0; i < item.qty; i++) {
                            ticketsValidated.push(_.extend(item.ticket.toObject(), {code: createHash(8)}));
                        }
                        return ticketsValidated;
                    });

                    customer.cart = {};
                    customer.save()
                        .then(success => {
                            res
                                .status(200)
                                .json(ticketsValidatedWithCode);
                        },
                        err => {
                            console.log(err);
                            res
                                .status(400)
                                .json(err)
                        });
                }
            });
    }

    return controller;
}
