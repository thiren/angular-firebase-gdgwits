(function () {
    "use strict";

    angular.module('demoApp.characters', [
        'ngAnimate',
        'ngAria',
        'ngMessages',
        'ngResource',
        'ui.router',
        'demoApp.constants',
        'demoApp.templates'
    ]).config(configure);

    configure.$inject = ['$stateProvider'];

    function configure($stateProvider) {

        $stateProvider
            .state('app.characters', {
                url: '/characters',
                views: {
                    'content@': {
                        templateUrl: 'characters/characters.tpl.html',
                        controller: 'CharactersCtrl',
                        controllerAs: 'vm'
                    }
                }
            })            .state('app.character-details', {
            url: '/characters/:id',
            views: {
                'content@': {
                    templateUrl: 'characters/details/character-details.tpl.html',
                    controller: 'CharacterDetailsCtrl',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
