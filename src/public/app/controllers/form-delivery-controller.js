(function () {
    var app = angular.module('challengerFullstack');

    function FormDeliveryController (deliveryService) {
        this.master = {
            name: '',
            weight: ''    
        }

        this.reset = function(){
            console.log('reset');
            this.value = angular.copy(this.master);
        }
        
        this.submit = function() {
            console.log(this.value);
        }

        this.reset();
    }

    app.controller('FormDeliveryController', FormDeliveryController);
})()