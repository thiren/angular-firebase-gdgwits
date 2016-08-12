(function () {
    "use strict";

    angular.module('demoApp.exampleModule')
        .controller('ExampleCtrl', exampleCtrl);

    exampleCtrl.$inject = ['$firebaseAuth'];

    function exampleCtrl($firebaseAuth) {
        var vm = this;

        //var auth = $firebaseAuth();
        //$scope.authObj = auth;
        var auth = firebase.auth();

        // signs a user in
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

        // creates the user and logs in
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

        function signOut() {
            auth.signOut();
        }

        // fires every time the auth state changes
        auth.onAuthStateChanged(function (firebaseUser) {
            if (firebaseUser) {
                console.log(firebaseUser);
            } else {
                console.log('not logged in');
            }
        });

        // Synchronously retrieves the current authentication state
        function getAuth() {
            var firebaseUser = auth.getAuth();
            if (firebaseUser) {
                console.log("Signed in as:", firebaseUser.uid);
            } else {
                console.log("Signed out");
            }
        }

        //Changes the password of the currently signed-in user.
        function changePassword() {
            auth.updatePassword("newPassword").then(function() {
                console.log("Password changed successfully!");
            }).catch(function(error) {
                console.error("Error: ", error);
            });
        }
    }
})();
