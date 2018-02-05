var _ = require('lodash');
module.exports = function (models) {
    var controller = {}
    var ShowModel = models.Show;

    controller.getAll = function (req, res) {
        var queryOptions = {};

        if (req.query.search) {
            queryOptions.$text = {
                $search: req.query.search
            }
        };

        ShowModel.find(queryOptions,(err, result) => {
            if (err || !result.length) {
                res
                    .status(200)
                    .json(err || "no data to show")
            } else {
                res
                    .status(200)
                    .json(result);
            }
        });
    }

    controller.createTickets = function (req, res) {
        var showId = req.params.showId,
            gigId = req.params.gigId,
            tickets = _.flattenDepth([req.body]);
            console.log(tickets);
        ShowModel
            .findById(showId)
            .exec((err, show) => {
                if (err || !show) {
                    res
                        .status(400)
                        .json(err || 'Show not found with id', showId);
                } else {
                    var gig = _.find(show.gigs, ['id', gigId]);
                    gig.tickets.push(...tickets);

                    show.save()
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
            });
    }

    controller.insert = function (req, res) {
        var newShow = new ShowModel(req.body);
        newShow.photo.data = req.body.photo;
        newShow.photo.contentType = 'image/png';
        newShow.save()
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
        var showId = req.params.id
        ShowModel
            .findByIdAndRemove(showId)
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

    return controller;
}
