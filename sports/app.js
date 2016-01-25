/**
 * Created by ashamsiev on 20.01.2016.
 */

angular.module("sportsStore", ["customFilters", "cart", "ngRoute"])
    .config(function($routeProvider) {

        $routeProvider.when('/complete', {
            templateUrl: '/sports/views/thankYou.html'
        });

        $routeProvider.when('/placeorder', {
            templateUrl: '/sports/views/placeOrder.html'
        });

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