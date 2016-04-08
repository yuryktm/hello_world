(function(){
    "use strict";
    angular
        .module("vendor.view")
        .directive("riskAssessmentDir", riskAssessmentDir);

    riskAssessmentDir.$inject = [];

    function riskAssessmentDir(){
        return {
            restrict: "A",
            templateUrl: "risk-assessment-tab/risk-assessment-view.html"
        }
    }
})();