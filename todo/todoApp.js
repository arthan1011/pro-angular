/**
 * Created by ashamsiev on 15.01.2016.
 */

var model = {
    user: 'Python',
    items: [
        {action: 'Make Food', done: false},
        {action: 'Eat Vegetables', done: false},
        {action: 'Code AI', done: true},
        {action: 'Clean Shoes', done: false}
    ]
};

var todoApp = angular.module("todoApp", []);
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