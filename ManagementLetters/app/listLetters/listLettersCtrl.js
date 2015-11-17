(function(){
    "use strict";
    angular.module("listLetter")
        .controller("listLetterCtrl", listLetterCtrl);

        function listLetterCtrl($scope, letterServices){
            $scope.model = letterServices.model;
            $scope.select = function(id){
                letterServices.select(id);
            };
        }
})();
