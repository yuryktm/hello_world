(function(){
    "use strict";

    angular.module("vendor.view")
        .controller("TESTCtrl", TESTCtrl);

    TESTCtrl.$inject = ['$scope', 'TESTServices'];

    function TESTCtrl($scope, tESTServices){

        $scope.model = tESTServices.model;

    }
})();