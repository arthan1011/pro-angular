/**
 * Created by ashamsiev on 21.01.2016.
 */

angular.module('sportsStore')
    .constant('productListActiveClass', 'btn-primary')
    .controller('productListCtrl', function($scope, $filter, productListActiveClass) {
        var selectedCategory = null;

        $scope.selectCategory = function(newCategory) {
            selectedCategory = newCategory;
        };

        $scope.categoryFilterFn = function(product) {
            return selectedCategory == null || product.category == selectedCategory;
        };

        $scope.getCategoryClass = function(category) {
            if (!selectedCategory && !category) return productListActiveClass;
            return category == selectedCategory ? productListActiveClass : '';
        }
    });