(function(){
    "use strict";
    angular.module("vendor.view")
        .controller("SCARCtrl", SCARCtrl);

    SCARCtrl.$inject = ['$scope', 'SCARServices'];

    function SCARCtrl($scope, sCARServices){

        $scope.model = sCARServices.model;

    }
})();