(function(){
    "use strict"

    angular.module("myApp", [])
        .run(runApp())
        .value("model", {
            user: {name: "User123", age: 15}
        })
        .controller("myController", myController)
        .filter("checkItem", checkItem);


    function myController($scope, model){
       $scope.user = model.user;

    };

    function checkItem(){

    };

    function runApp($http, model){
        $http.get("my.json")
             .success(function(data){
                model.items = data;
            })
    }

})();
