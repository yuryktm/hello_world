(function(){
    "use strict"

    angular.module("myApp", [])
        .run(runApp)
        .value("model", {
            user: {name: "User123", age: 15}
        })
        .controller("MyController", myController)
        .filter("checkItem", checkItem)
        .directive("taskList", taskList); //в разметке это деректива task-list


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
    };

    //directives
    function taskList(){
        //возвращает конфигурационный объект
        return {
            restrict: "A",         //A -директиву будем использовать как атрибут
            templateUrl:"table.html"
        }
    }


})();


//http://vitava.com.ua/files/angularjs/
//книги
// pro angular js
//ng-book