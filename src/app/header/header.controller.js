(function () {
    "use strict";

    angular.module('demoApp.header')
        .controller('HeaderCtrl', headerCtrl);

    headerCtrl.$inject = [];

    function headerCtrl() {
        var vm =  this;
        
        vm.header = 'Header';
    }
})();
