(function(){
    "use strict";
    angular
        .module("vendor.view")
        .service("TESTServices", TESTServices);

    TESTServices.$inject = ['$http'];

    function TESTServices($http){
        this.model = {};
        var model = this.model;

        this.getTESTList = function(){

            model.testList = ["sdf", "sdf"];

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

