(function(){
    "use strict";
    angular.module("app")
        .controller("dayCtrl", dayCtrl);

   // dayCtrl.$inject = ["$scope","days"]; для минификации

    function dayCtrl($scope, days){
        //var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        //$scope.day = dayNames[new Date().getDay()];

        //$scope.day = new Date().getDay();

        $scope.day = days.day;
    }

})();
