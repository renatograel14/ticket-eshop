(function(){
    var app = angular.module('challengerFullstack');

    var deliveryService = function($http) {
        this.getAll = () => {
            return $http.get('/deliveries');
        }

        this.insert = value => { 
            return $http.post('/deliveries', value);
        }

        this.remove = id => {
            return $http.delete('/deliveries/'.concat(id));
        }
    }


    app.service('deliveryService', deliveryService);
})()