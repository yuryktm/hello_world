(function(){
    "use strict"

    angular.module('myApp', ['mgo-angular-wizard'])
        .controller("MyController", myController);

    function myController($scope){
        $scope.disabled = 'true';
    };


})();


