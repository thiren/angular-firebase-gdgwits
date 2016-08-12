(function () {
    "use strict";

    angular.module('demoApp.exampleModule')
        .directive('exampleDirective', directive);

    directive.$inject = ['$q'];

    function directive($q) {
        return {
            restrict: 'A',
            require: 'ngModel', // you can require a controller
            template: 'Name: {{customer.name}} Address: {{customer.address}}',
            scope: {
                oneWay: '<oneWay',
                twoWay: '=twoWay',
                fixedString: '@',
                executeExpression: '&function'
            },
            link: link
        };

        function link(scope, element, attrs, ctrl) {
            scope.customer = {
                name: 'Sam',
                address: 'Somewhere'
            }
        }
    }
})();
