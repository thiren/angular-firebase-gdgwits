(function () {
    'use strict';

    angular.module('demoApp', [
        'firebase',
        'ngAnimate',
        'ngAria',
        'ngMessages',
        'ngResource',
        'ui.router',
        'demoApp.templates',
        'demoApp.constants',
        'demoApp.header',
        'demoApp.characters',
        'demoApp.home'
    ])
        .config(configure)
        .run(run);

    configure.$inject = ['$stateProvider', '$compileProvider', '$locationProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', 'configs'];

    function configure($stateProvider, $compileProvider, $locationProvider, $urlRouterProvider, $urlMatcherFactoryProvider, configs) {
        $compileProvider.debugInfoEnabled(configs.debugInfoEnabled);
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
        $urlMatcherFactoryProvider.caseInsensitive(true);
        $urlMatcherFactoryProvider.strictMode(false);
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('app', {
                url: '',
                abstract: true,
                views: {
                    'header@': {
                        templateUrl: 'header/header.tpl.html',
                        controller: 'HeaderCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.home', {
                url: '/home',
                views: {
                    'content@': {
                        templateUrl: 'home/home.tpl.html',
                        controller: 'HomeCtrl',
                        controllerAs: 'vm'
                    }
                }
            });

        var config = {
            apiKey: "AIzaSyDEAD_mwwdo8drXnInKC31Zy5XPy6Yh0BE",
            authDomain: "gdgwits-demo.firebaseapp.com",
            databaseURL: "https://gdgwits-demo.firebaseio.com",
            storageBucket: "gdgwits-demo.appspot.com",
        };
        firebase.initializeApp(config);
    }

    run.$inject = ['$rootScope'];

    function run($rootScope) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

        });

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {

        });

        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {

        });

        $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {

        });

        $rootScope.$on('$viewContentLoading', function (event, viewConfig) {

        });
    }
})();
