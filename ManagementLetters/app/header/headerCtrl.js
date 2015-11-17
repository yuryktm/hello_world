(function(){
    "use strict";
    angular.module("headerModule")
        .controller("headerCtrl", headerCtrl);

    function headerCtrl($scope, letterServices){
        $scope.removeLetter = function(){
            letterServices.removeSelectLetter();
        };

        $scope.setReadedProp = function(){
            letterServices.inversPropertyReaded()
        };
    }
})();
