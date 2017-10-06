var app = angular.module('multiplayApp',[]);

app.directive('multiplyDirective', function(){
    return {
        templateUrl:"multiplyTemplate.html",
        scope: true,
        controller: function($scope){ 

            $scope.getTables = function(){
                var num = $scope.number;
                var multiplecationArray = [];
                for (var i = 1; i <= num; i++) {
                    var tableObj = {};
                    for (k = 1; k <= 10; k++) {
                        tableObj[k] = i * k;
                    }
                    multiplecationArray.push(tableObj);
                }
                $scope.resultMultiplecation = multiplecationArray;
            }
        }
    }
})