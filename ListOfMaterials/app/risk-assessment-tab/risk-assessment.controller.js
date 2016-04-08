(function(){
    "use strict";
    angular.module("vendor.view")
        .controller("RiskAssessmentCtrl", RiskAssessmentCtrl);

    RiskAssessmentCtrl.$inject = ['$scope', 'RiskAssessmentServices'];

    function RiskAssessmentCtrl($scope, riskAssessmentServices){

        $scope.model = riskAssessmentServices.model;

    }
})();