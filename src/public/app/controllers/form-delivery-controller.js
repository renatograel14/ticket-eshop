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
            deliveryService.insert(this.value)
                .then(result=> {
                    var scope = angular.element(document.getElementById('main')).scope();
                    scope.app.refresh();
                });
        }

        this.reset();
    }

    app.controller('FormDeliveryController', FormDeliveryController);
})()