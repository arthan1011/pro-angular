/**
 * Created by ashamsiev on 29.01.2016.
 */

angular.module('sportsStoreAdmin')
.constant('authUrl', 'http://localhost:5500/users/login')
    .controller('authCtrl', function($scope, $http, $location, authUrl) {

        $scope.authenticate = function (user, pass) {
            $http.post(authUrl, {
                username: user,
                password: pass
            }, {
                withCredentials: true
            }).success(function (data) {
                $location.path('/main');
            }).error(function (error) {
                $scope.authenticationError = error;
            });
        }
    })
    .controller('mainCtrl', function($scope) {

        $scope.screen = ["Products", "Orders"];
        $scope.current = $scope.screen[0];

        $scope.setScreen = function(index) {
            $scope.current = $scope.screen[index];
        };

        $scope.getScreen = function() {
            return $scope.current == 'Products' ? '/sports/views/adminProducts.html' : '/sports/views/adminOrders.html';
        };
    });