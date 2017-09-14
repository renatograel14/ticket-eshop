
module.exports = function(models) {
    var controller = {}

    controller.getAll = (req, res) => {
        console.log(models.Delivery)
        res
            .status(200)
            .sent('teste')
    }

    return controller;
}