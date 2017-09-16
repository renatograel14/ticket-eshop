
module.exports = function (models) {
    var controller = {}
    var DeliveryModel = models.Delivery;
    controller.getAll = function (req, res) {
        DeliveryModel.find((err, result) => {
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
        var newDelivery = new DeliveryModel(req.body);
        newDelivery.save()
            .then(success => {
                res
                    .status(200)
                    .json(success);
            },
            err => {
                res
                    .status(400)
                    .json(err)
            })
    }

    controller.delete = function (req, res) {
        var deliveryId = req.params.id
        DeliveryModel
            .findByIdAndRemove(deliveryId)
            .exec((err, result)=>{
                if(err) {
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
