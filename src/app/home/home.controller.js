(function () {
    "use strict";

    angular.module('demoApp.home')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$firebaseObject', '$firebaseArray'];

    function HomeCtrl($firebaseObject, $firebaseArray) {
        var vm =  this;

        var auth = firebase.auth();


        vm.signIn = signIn;
        vm.createUser = createUser;

        function signIn(email, password) {
            // returns a promise
            var promise = auth.signInWithEmailAndPassword(email, password);

            promise
                .then(function (firebaseUser) {
                    console.log(firebaseUser);
                })
                .catch(function (err) {
                    console.log(err.message);
                });
        }

        function createUser(email, password) {
            var promise = auth.createUserWithEmailAndPassword(email, password);

            promise
                .then(function (firebaseUser) {
                    console.log(firebaseUser);
                })
                .catch(function (err) {
                    console.log(err.message);
                });
        }
    }
})();
