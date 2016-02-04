/**
 * Created by ashamsiev on 03.02.2016.
 */

angular.module('exampleApp.Controllers', [])
    .controller('dayCtrl', function ($scope, days) {
        $scope.day = days.today;
    })
    .controller('tomorrowCtrl', function ($scope, days) {
        $scope.day = days.tomorrow;
    });