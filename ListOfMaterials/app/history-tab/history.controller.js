(function(){
    "use strict";
    angular.module("vendor.view")
        .controller("HistoryCtrl", HistoryCtrl);

    HistoryCtrl.$inject = ['$scope', 'HistoryServices'];

    function HistoryCtrl($scope, historyServices){

        $scope.model = historyServices.model;

    }
})();