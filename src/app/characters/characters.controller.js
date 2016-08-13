(function () {
    "use strict";

    angular.module('demoApp.characters')
        .controller('CharactersCtrl', CharactersCtrl);

    CharactersCtrl.$inject = ['$resource'];

    function CharactersCtrl($resource) {
        var vm =  this;

        // vm.search = {
        //     name: null
        // };
        vm.name = null;

        vm.characters = [];

        var url = 'https://marvel-comics-api.herokuapp.com/characters';
        var resource = $resource(url,
            null,
            {
                query: {method: 'GET', url: url, isArray: false, cache: true},
                get: {method: 'GET', url: url + '/:id', cache: true}
            });



        vm.search = function() {
            var query = {};

            if (vm.name) {
                query.name = vm.name;
            }
            resource.query(query).$promise.then(function (response) {
                vm.characters = response.data;
            });
        }
    }
})();
