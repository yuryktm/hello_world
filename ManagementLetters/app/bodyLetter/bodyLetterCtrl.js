(function(){
    "use strict";
    angular.module("bodyLetter")
        .controller("bodyLetterCtrl", bodyLetterCtrl);

    function bodyLetterCtrl($scope, letterServices){
        $scope.model = letterServices.model;
    }
})()
