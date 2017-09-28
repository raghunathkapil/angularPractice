var filterApp = angular.module('myApp',[]);

filterApp.service('filterService', function(){
  this.filterString = function (inputString) { 
    
      var strArray = inputString.split("");    
      var uniqueStrArray = [strArray[0]];

      for (var i=1; i<strArray.length; i++) {
         if (i !== 0 && uniqueStrArray.indexOf(strArray[i]) === -1) 
           uniqueStrArray.push(strArray[i]);  
      }
      return uniqueStrArray.join("");    
  }
});

filterApp.filter('removeDuplicateChar', function(filterService){
   return function (inputString) {
        return filterService.filterString(inputString);
    };  
});

filterApp.controller('filterController', ['$scope', function ($scope){
   $scope.inputString = '';
   $scope.resultString = '';
   $scope.convertCap = function(){
     $scope.resultString = $scope.inputString;
   }   
}]);
 


    
     
   