(function(){
    "use strict";
    angular
        .module("vendor.view")
        .service("SCARServices", SCARServices);

    SCARServices.$inject = ['$http'];

    function SCARServices($http){
        this.model = {};
        var model = this.model;

        this.getSCARList = function(){

            model.scarList = ["sdf", "sdf"];

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
    }
})();

