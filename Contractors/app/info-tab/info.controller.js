(function(){
    "use strict";
    angular.module("contractor.edit")
        .controller("InfoCtrl", InfoCtrl);

    InfoCtrl.$inject = ['$scope', 'InfoServices'];

    function InfoCtrl($scope, infoServices){
        $scope.model = infoServices.model;
    }
})();