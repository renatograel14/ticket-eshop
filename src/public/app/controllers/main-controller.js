(function () {
    var app = angular.module('challengerFullstack');

    function MainController(deliveryService) {
        this.title = "Deliveries App";
        this.deliveries = [];
        this.instructions = [
            "Register a delivery. Make sure you describe the weigth and the right location (with your address number)",
            "See it on the map",
            "Choose those which you don't need anymore and delete",
            "Be cool (⌐■_■)"
        ]

        this.totalWeight = 0;
        this.totalCustomers = 0;

        this.delete = (delivery) => {
            deliveryService.remove(delivery._id)
                .then((err, result) => {
                    this.refresh();
                })
        }

        this.refresh = () => {
            deliveryService.getAll()
                .then(result => {
                    this.deliveries = result.data;

                    this.totalCustomers = this.deliveries.length;
                    this.totalWeight = this.deliveries.reduce((prev, curr)=> {
                        return prev + curr.weight;
                    }, 0);


                    var mapScope = angular.element(document.getElementById('mapid')).scope();
                    mapScope.refresh(this.deliveries);
                });
        }

        this.refresh();


    }

    app.controller('MainController', MainController);
})()