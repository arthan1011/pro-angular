/**
 * Created by ashamsiev on 20.01.2016.
 */

angular.module("sportsStore", ["customFilters", "cart", "ngRoute"])
    .config(function($routeProvider) {

        $routeProvider.when('/checkout', {
            templateUrl: '/sports/views/checkoutSummary.html'
        });

        $routeProvider.when('/products', {
            templateUrl: '/sports/views/productList.html'
        });

        $routeProvider.otherwise({
            templateUrl: '/sports/views/productList.html'
        });
    });