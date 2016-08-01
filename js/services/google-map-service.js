angular.module('app')
.service('GoogleMapService',['$q', function GoogleMapService($q) {
  this.getPlaces = function(){
    var map;
    var service;
    var infowindow;
    var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);
    var placesToReturn;

    map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });

    var request = {
      location: pyrmont,
      radius: '500',
      types: ['store']
    };

    service = new google.maps.places.PlacesService(map);

    return service.nearbySearch(request, function(places){
      console.log(places);
      return places;
    });
  };
}]);
