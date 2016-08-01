var Place = {
  controller: ['$scope', function($scope) {
    this.place = {id: 1, name: 'Sydney', description: 'capital of Australia lorem'};
  }],
  controllerAs: 'placeCtrl',
  template: [
    '<div class="thumbnail">',
    '<img src="http://www.australia.com/content/australia/en/places/sydney/nsw-sydney-harbour/_jcr_content/image.adapt.761.medium.jpg" alt="sydney">',
    '<div class="caption">',
    '<h3>{{placeCtrl.place.name}}</h3>',
    '<p><a href="#" class="btn btn-primary" role="button">Website</a></p>',
    '<p>{{placeCtrl.place.description}}</p>',
    '</div>',
    '</div>'
  ].join('')
}

angular.module('app')
       .component('place', Place);
