(function () {

    var app = angular.module('challengerFullstack');
    var access_token = 'pk.eyJ1IjoicmVuYXRvZ3JhZWwiLCJhIjoiY2o3bm1nZW95MWt6ejJ3cGs3a2Vhbzl0biJ9.o4iMVxfEErJckqF4J3iJgA';
    var uri_leaflet = `https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${access_token}`;
    function MapController($scope, deliveryService) {
        $scope.mymap = L.map('mapid').setView([-23.550136, -46.633331], 13); //São paulo coordinates
        $scope.markers = [];
        L.tileLayer(uri_leaflet, {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: access_token
        }).addTo($scope.mymap);

        $scope.mymap.invalidateSize();

        setTimeout(() => {
            $scope.mymap.invalidateSize();
        }, 300);


        $scope.addMarker = (delivery) => {
            L.marker(Object.values(delivery.address.geolocation)).addTo($scope.mymap)
                .bindPopup(`<b>${delivery.name}</b><br /> ${delivery.weight} kg`);
        }

        $scope.refresh = (deliveries) => {
            var { markers, mymap } = $scope;
            markers.forEach(marker=> {
                mymap.removeLayer(marker);
            });
            deliveries.forEach(delivery => {
                var marker = L.marker(Object.values(delivery.address.geolocation)).addTo($scope.mymap)
                    .bindPopup(`<b>${delivery.name}</b><br /> ${delivery.weight} kg`);
                markers.push(marker);
            });
        }
    }

    app.controller('MapController', MapController);

})();