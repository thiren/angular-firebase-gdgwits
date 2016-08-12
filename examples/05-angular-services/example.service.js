(function () {
    "use strict";

    angular.module('demoApp.exampleModule')
        .service('exampleOneService', service);

    service.$inject = [];

    function service() {
        this.doSomething = function (data) {
            /* */
        };
    }
})();

// preferred
(function () {
    "use strict";

    angular.module('demoApp.exampleModule')
        .factory('exampleTwoService', service);

    service.$inject = [];

    function service() {
        return {
            doSomething: function (data) {
                /* */
            }
        };
    }
})();
