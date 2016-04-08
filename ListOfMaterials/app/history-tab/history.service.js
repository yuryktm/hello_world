(function(){
    "use strict";
    angular
        .module("vendor.view")
        .service("HistoryServices", HistoryServices);

    HistoryServices.$inject = ['$http'];

    function HistoryServices($http){
        this.model = {};
        var model = this.model;

        this.getHistoryList = function(){

            model.historyList = ["sfd", "fgdfg"];

            //angular.element(document.querySelectorAll(".preloader")).css('display', 'inline');
            //$http.get(url)
            //    .then(function(response){
            //            if(response.data){
            //                //model.historyList = response.data.
            //                angular.element(document.querySelectorAll(".preloader")).css('display', 'none');
            //            }
            //        },function(response){
            //            console.log(response.statusText);
            //        }
            //    );
        };
    }
})();
