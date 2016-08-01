angular.module('app')
       .service('GoogleMapService',function GoogleMapService() {

         this.getPlaces = function(){
          

           var places = searchBox.getPlaces();

           if (places.length == 0) {
             return;
           }
           console.log(places);
           return places;
         };



});
