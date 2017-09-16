(function () {
    var app = angular.module('challengerFullstack');

    function FormDeliveryController($scope, deliveryService) {
        this.master = {
            name: '',
            weight: '',
            address: '',
        }


        this.reset = function () {
            $scope.geometry = {};
            this.value = angular.copy(this.master);
        }

        this.submit = function () {

            var place = $scope.gPlace.getPlace();

            if (!place.address_components) {
                window.alert("No details available for input: '" + place.name + "'");
                return;
            }

            if (place.address_components.length < 6) {
                window.alert("Incomplete location. \nEnter the street name and the number also");
                return;
            }

            var { name, weight } = this.value;
            var add_details = place.address_components;
            var {location } = place.geometry;

            var delivery = {
                name,
                weight,
                address: {
                    number: add_details[0].long_name,
                    address: add_details[1].long_name,
                    district: add_details[2].long_name,
                    city: add_details[3].long_name,
                    state: add_details[4].long_name,
                    country: add_details[5].long_name,
                    geolocation:  $scope.geometry
                }
            }

            deliveryService.insert(this.value)
                .then(result => {
                    this.reset();
                    var scope = angular.element(document.getElementById('main')).scope();
                    scope.app.refresh();
                });
        }

        this.reset();
    }

    app.controller('FormDeliveryController', FormDeliveryController);
})()