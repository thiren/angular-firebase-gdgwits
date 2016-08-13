(function () {
    "use strict";

    angular.module('demoApp.characters')
        .controller('CharacterDetailsCtrl', CharacterDetailsCtrl);

    CharacterDetailsCtrl.$inject = ['$resource', '$stateParams'];

    function CharacterDetailsCtrl($resource, $stateParams) {
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

        console.log($stateParams);

        resource.get({id: $stateParams.id}).$promise.then(function (response) {
            vm.character = response.data[0];
        });
    }
})();
