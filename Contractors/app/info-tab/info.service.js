(function(){
    "use strict";
    angular
        .module("contractor.edit")
        .service("InfoServices", InfoServices);

    InfoServices.$inject = ['$http'];

    function InfoServices($http){
        this.model = {};
        var model = this.model;


        this.getInfoList = function(){

            model.infoList = ["sdf", "sdf"];

            //angular.element(document.querySelectorAll(".preloader")).css('display', 'inline');
            //$http.get(url)
            //    .then(function(response){
            //            if(response.data){
            //
            //                model.scarList = ["sdf", "sdf"];//response.data.;
            //                angular.element(document.querySelectorAll(".preloader")).css('display', 'none');
            //            }
            //        },function(response){
            //            console.log(response.statusText);
            //        }
            //    );
        };
        this.getInfoList();
    }
})();

