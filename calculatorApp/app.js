var app = angular.module("calculatorApp", []);

app.controller("calculatorController", calculatorController);

function calculatorController() {
    this.selectOperator = function(operator) {
        this.operator = operator;
    }

    this.getResult = function() {
        this.result = 0;
        var num1 = parseFloat(this.number1);
        var num2 = parseFloat(this.number2);

        if (this.operator === "+") {
            this.result = num1 + num2;
        } else if (this.operator === "-") {
            this.result = num1 - num2;
        } else if (this.operator === "*") {
            this.result = num1 * num2;
        } else if (this.operator === "/") {
            this.result = num1 / num2;
        }
    }
}