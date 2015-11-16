(function(){
    "use strict";
    angular.module("listLetter")
        .controller("listLetterCtrl", listLetterCtrl);

        function listLetterCtrl($scope, letterServices){


            $scope.letters = letterServices.letters;
           // $scope.letter = "asdfasdf";
        }
})();
