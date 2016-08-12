(function () {
    "use strict";

    angular.module('demoApp.exampleModule')
        .controller('ExampleCtrl', exampleCtrl);

    exampleCtrl.$inject = ['$firebaseArray'];

    function exampleCtrl($firebaseArray) {
        var vm =  this;

        var rootRef = firebase.database().ref().child('example');
        var ref = rootRef.child('array');
        var list = $firebaseArray(ref);
        vm.array = list;

        // loading the list
        list.$loaded()
            .then(function(x) {
                console.log(x === list); // true
            })
            .catch(function(error) {
                console.log("Error:", error);
            });

        // adding to a list
        list.$add({ foo: "bar" }).then(function(ref) {
            var id = ref.key;
            console.log("added record with id " + id);
            list.$indexFor(id); // returns location in the array
        });

        // removing from a list
        var item = list[0];
        list.$remove(0).then(function(ref) {
            console.log(ref.key === item.$id); // true
        });

        // updating a list item
        list[2].foo = "bar";
        list.$save(2).then(function(ref) {
            console.log(ref.key === list[2].$id); // true
        });
    }
})();
