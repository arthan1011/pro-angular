/**
 * Created by ashamsiev on 01.02.2016.
 */

angular.module('exampleApp', [])
    .controller('dayCtrl', function ($scope) {
        $scope.day = (new Date).getDay();
    })
    .controller('tomorrowCtrl', function ($scope) {
        $scope.day = (new Date).getDay() + 1;
    })
    .directive('highlight', function ($filter) {
        var dayFilter = $filter('dayName');

        return function (scope, element, attrs) {
            if (dayFilter(scope.day) == attrs['highlight']) {
                element.css('color', 'red');
            }
        }
    })
    .filter('dayName', function () {
        var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'];
        return function (input) {
            return angular.isNumber(input) ? dayNames[input] : input;
        }
    });