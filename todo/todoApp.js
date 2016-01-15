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
});