var Info = {
  controller: ['$scope', function($scope){
    this.visible = true;
    this.toggleVisibility = function(){
      this.visible = !this.visible;
      angular.element(document.querySelector('#map')).css('width','100%');
    };
  }],
  controllerAs: 'infoCtrl',
  template: [
    '<div ng-show="infoCtrl.visible" id="info-block" class="col-md-4">',
    '<div class="row">',
    '<button ng-click="infoCtrl.toggleVisibility()" class="btn btn-default pull-right" id="hide-info">Hide</button>',
    '</div>',
    '<div class="row">',
    '<places></places>',
    '</div>',
    '</div>'
  ].join('')
}

angular.module('app')
       .component('info', Info);
