var Places = {
  controller: ['$scope', function($scope) {
    this.places = [
      {id: 1, name: 'Sydney', description: 'capital of Australia'},
      {id: 2, name: 'Austin', description: 'Texas capital'},
      {id: 3, name: 'Shanghai', description: 'largest city in China'}
    ];
  }],
  controllerAs: 'placesCtrl',
  template: [
    '<div ng-repeat="place in placesCtrl.places" class="thumbnail">',
    '<img src="http://www.australia.com/content/australia/en/places/sydney/nsw-sydney-harbour/_jcr_content/image.adapt.761.medium.jpg" alt="sydney">',
    '<div class="caption">',
    '<h3>{{place.name}}</h3>',
    '<p>{{place.description}}</p>',
    '<p><a href="#" class="btn btn-primary" role="button">Button</a></p>',
    '</div>',
    '</div>'
  ].join('')
}

angular.module('app')
       .component('places', Places);
