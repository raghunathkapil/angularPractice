var app = angular.module('multiplecationApp', []);

app.controller('multiplecationCtrl', multiplecationCtrl);

function multiplecationCtrl() {
    this.getTables = function() {
        var num = this.number;
        var multiplecationArray = [];
        for (var i = 1; i <= num; i++) {
            var tableObj = {};
            for (k = 1; k <= 10; k++) {
                tableObj[k] = i * k;
            }
            multiplecationArray.push(tableObj);
        }
        this.resultMultiplecation = multiplecationArray;
    }

}