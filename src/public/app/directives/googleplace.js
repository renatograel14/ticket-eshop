
(function () {

    var app = angular.module('challengerFullstack');

    app.directive('googleplace', function () {
        return {
            require: 'ngModel',
            link: function (scope, element, attrs, model) {
                scope.gPlace = new google.maps.places.Autocomplete(element[0]);
                google.maps.event.addListener(scope.gPlace, 'place_changed', function () {


                    var place = scope.gPlace.getPlace();
                    var { location } = place.geometry;

                    var geometry = {
                        longitude: location.lat(),
                        latitude: location.lng()
                    };

                    scope.geometry = geometry;

                    scope.$apply(function () {
                        model.$setViewValue(element.val());
                    });
                });
            }
        };
    });

})();
