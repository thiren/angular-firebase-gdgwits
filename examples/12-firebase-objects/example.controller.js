(function () {
    "use strict";

    angular.module('demoApp.exampleModule')
        .controller('ExampleCtrl', exampleCtrl);

    exampleCtrl.$inject = ['$firebaseObject'];

    function exampleCtrl($firebaseObject) {
        var vm = this;

        var rootRef = firebase.database().ref().child('example');
        var ref = rootRef.child('object');
        var obj = $firebaseObject(ref);
        vm.object = obj;
        // obj.$ref().key === obj.$id

        // updates the object
        obj.foo = "bar";
        obj.$save().then(function(ref) {
            console.log(ref.key === obj.$id); // true
        }, function(error) {
            console.log("Error:", error);
        });

        // removing the object
        obj.$remove().then(function(ref) {
            // data has been deleted locally and in the database
        }, function(error) {
            console.log("Error:", error);
        });

        // promise is resolved when the data has been downloaded from the database
        obj.$loaded()
            .then(function(data) {
                console.log(data === obj); // true
            })
            .catch(function(error) {
                console.error("Error:", error);
            });
    }
})();
