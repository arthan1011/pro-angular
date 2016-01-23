/**
 * Created by ashamsiev on 21.01.2016.
 */

angular.module('sportsStore')
    .constant('productListActiveClass', 'btn-primary')
    .constant('productListPageCount', 3)
    .controller('productListCtrl', function($scope,
                                            $filter,
                                            productListActiveClass,
                                            productListPageCount,
                                            cart) {
        var selectedCategory = null;

        $scope.selectedPage = 1;
        $scope.pageSize = productListPageCount;

        $scope.selectCategory = function(newCategory) {
            selectedCategory = newCategory;
            $scope.selectedPage = 1;
        };

        $scope.selectPage = function(newPage) {
            $scope.selectedPage = newPage;
        };

        $scope.categoryFilterFn = function(product) {
            return selectedCategory == null || product.category == selectedCategory;
        };

        $scope.getCategoryClass = function(category) {
            if (!selectedCategory && !category) return productListActiveClass;
            return category == selectedCategory ? productListActiveClass : '';
        };

        $scope.getPageClass = function(page) {
            return page == $scope.selectedPage ? productListActiveClass : '';
        };

        $scope.addProductToCart = function (product) {
            cart.addProduct(product.id, product.name, product.price);
        }
    });