/**
 * Created by ashamsiev on 15.01.2016.
 */

var model = {
    user: 'Python'
};

var todoApp = angular.module("todoApp", []);

todoApp.run(function($http) {
    $http.get('todo.json').success(function(data) {
        model.items = data;
    })
});

todoApp.filter('checkedItems', function() {
    return function (items, showCompleted) {
        var resultArray = [];
        angular.forEach(items, function(item) {
            if (item.done == false || showCompleted == true) {
                resultArray.push(item);
            }
        });
        return resultArray;
    }
});

todoApp.controller("ToDoCtrl", function($scope) {
    $scope.todo = model;

    $scope.incompleteCount = function() {
        var count = 0;

        angular.forEach($scope.todo.items, function(item) {
            if (!item.done) {count++}
        });
        return count;
    };

    $scope.warningLevel = function() {
        return $scope.incompleteCount() > 1 ? ($scope.incompleteCount() > 2 ? 'label-danger' : 'label-warning') : 'label-success';
    };

    $scope.addNewItem = function(actionText) {
        $scope.todo.items.push({action: actionText, done: false});
    };
});