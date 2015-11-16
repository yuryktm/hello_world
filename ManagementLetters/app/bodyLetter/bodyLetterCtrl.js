(function(){
    "use strict";
    angular.module("bodyLetter")
        .controller("bodyLetterCtrl", bodyLetterCtrl);

    function bodyLetterCtrl($scope){

        $scope.letter = {
            who:"asdf@asdf.sd",
            subject:"asdf",
            body:"asdf asdf asdf"};
    }
})()
