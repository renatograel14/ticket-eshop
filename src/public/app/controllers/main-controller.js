(function () {
    var app = angular.module('challengerFullstack');

    function MainController(deliveryService) {
        this.title = "Deliveries App";
        this.deliveries = [];
        this.instructions = [
            "Register a delivery. Make sure you describe the weigth and the right location",
            "See it on the map",
            "Choose those which you don't need anymore and delete",
            "Be cool (⌐■_■)"
        ]

        this.delete = (delivery) => {
            deliveryService.remove(delivery._id)
                .then((err, result)=> {
                    this.refresh();
                })
        }

        this.refresh = () => {
            deliveryService.getAll()
                .then(result => this.deliveries = result.data);
        }

        this.refresh();


    }

    app.controller('MainController', MainController);
})()