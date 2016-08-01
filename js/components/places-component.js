var Places = {
  controller: ['$scope', 'GoogleMapService', function($scope, GoogleMapService) {
    this.places = GoogleMapService.getPlaces();
    this.getUpdate = function(){
      GoogleMapService.getPlaces().then(function(promise){
        this.places = promise;
        console.log(promise);
      });

    }

  }],
  controllerAs: 'placesCtrl',
  template: [
    '<button ng-click="placesCtrl.getUpdate()">Update</button>',
    '<div ng-repeat="place in placesCtrl.places" class="thumbnail">',
    '<img src="http://www.australia.com/content/australia/en/places/sydney/nsw-sydney-harbour/_jcr_content/image.adapt.761.medium.jpg" alt="sydney">',
    '<div class="caption">',
    '<h3>{{place.name}}</h3>',
    '<p>{{place.formatted_address}}</p>',
    '<p><a href="#" class="btn btn-primary" role="button">Button</a></p>',
    '</div>',
    '</div>'
  ].join('')
}

angular.module('app')
       .component('places', Places);
