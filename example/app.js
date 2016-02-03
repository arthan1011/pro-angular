/**
 * Created by ashamsiev on 01.02.2016.
 */

angular.module('exampleApp', [])
    .value('nowValue', new Date())
    .controller('dayCtrl', function ($scope, days) {
        //$scope.day = (new Date).getDay();
        $scope.day = days.today;
    })
    .controller('tomorrowCtrl', function ($scope, days) {
        //$scope.day = (new Date).getDay() + 1;
        $scope.day = days.tomorrow;
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
    })
    .service('days', function(nowValue) {
        this.today = nowValue.getDay();
        this.tomorrow = (this.today + 1) % 7;
    });