(function(){
    "use strict";
    angular
        .module("vendor.view")
        .service("RiskAssessmentServices", RiskAssessmentServices);

    RiskAssessmentServices.$inject = ['$http'];

    function RiskAssessmentServices($http){
        this.model = {};
        var model = this.model;

        this.getRiskAssessment = function(){

            model.RiskAssessmentList = ["sdfg","sdfg"];
            //angular.element(document.querySelectorAll(".preloader")).css('display', 'inline');
            //$http.get(url)
            //    .then(function(response){
            //            if(response.data){
            //
            //                model.List = ["sdfg","sdfg"];//response.data.;
            //
            //                angular.element(document.querySelectorAll(".preloader")).css('display', 'none');
            //            }
            //        },function(response){
            //            console.log(response.statusText);
            //        }
            //    );
        };
    }
})();
