/**
 * Created by ashamsiev on 01.02.2016.
 */

angular.module('exampleApp', [])
    .controller('dayCtrl', function($scope) {
        var dayNames = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday' ];
        $scope.day = dayNames[(new Date).getDay()];
    })
    .controller('tomorrowCtrl', function($scope) {
        var dayNames = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday' ];
        $scope.day = dayNames[((new Date).getDay() + 1) % 7]
    })
    .directive('highlight', function() {
        return function (scope, element, attrs) {
            if (scope.day == attrs['highlight']) {
                element.css('color', 'red');
            }
        }
    });