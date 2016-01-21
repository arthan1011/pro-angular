/**
 * Created by ashamsiev on 21.01.2016.
 */

angular.module('sportsStore')
.controller('productListCtrl', function($scope, $filter) {
    var selectedCategory = null;

    $scope.selectCategory = function(newCategory) {
        selectedCategory = newCategory;
    };

    $scope.categoryFilterFn = function(product) {
        return selectedCategory == null || product.category == selectedCategory;
    }
});