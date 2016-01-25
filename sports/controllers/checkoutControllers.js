/**
 * Created by ashamsiev on 25.01.2016.
 */

angular.module('sportsStore')
    .controller('cartSummaryCtrl', function($scope, cart) {
        $scope.cartData = cart.getProducts();

        $scope.total = function() {
            var total = 0;
            for (var i = 0; i < $scope.cartData.length; i++) {
                var item = $scope.cartData[i];
                total += item.count * item.price;
            }
            return total;
        };

        $scope.remove = function(id) {
            cart.removeProduct(id);
        }
    });