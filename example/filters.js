/**
 * Created by ashamsiev on 03.02.2016.
 */

angular.module('exampleApp.Filters', [])
    .filter('dayName', function () {
        var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'];
        return function (input) {
            return angular.isNumber(input) ? dayNames[input] : input;
        }
    });