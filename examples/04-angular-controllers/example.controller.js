(function () {
    "use strict";

    angular.module('demoApp.exampleModule')
        .controller('ExampleCtrl', exampleCtrl);

    exampleCtrl.$inject = [];

    function exampleCtrl() {
        var vm =  this;
        
        vm.someData = 'Foo';
        vm.doSomething = doSomething;

        function doSomething() {
            console.log('Bar');
        }
    }
})();
