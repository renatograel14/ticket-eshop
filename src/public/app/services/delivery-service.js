(function(){
    var app = angular.module('challengerFullstack');

    var deliveryService = function($http) {
        this.getAll = () => {
            return $http.get('/deliveries');
        }
    }

    app.service('deliveryService', deliveryService);
})()