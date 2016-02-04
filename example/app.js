/**
 * Created by ashamsiev on 01.02.2016.
 */

angular.module('exampleApp',
    [
        'exampleApp.Controllers',
        'exampleApp.Filters',
        'exampleApp.Directives',
        'exampleApp.Services'
    ])
    .value('nowValue', new Date());

angular.module('exampleApp.Services', [])
    .service('days', function(nowValue) {
        this.today = nowValue.getDay();
        this.tomorrow = (this.today + 1) % 7;
    });

angular.module('exampleApp.Directives', [])
    .directive('highlight', function ($filter) {
        var dayFilter = $filter('dayName');

        return function (scope, element, attrs) {
            if (dayFilter(scope.day) == attrs['highlight']) {
                element.css('color', 'red');
            }
        }
    });