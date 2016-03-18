(function(){
    "use strict";

    angular.module("testSrv",[]);

    angular
        .module("testSrv")
        .factory("srv", function($http, $q){
            return {
                getData: getData
            };

            function getData(){
                return $http({
                    method: "GET",
                    url: ""
                })
                    .then(function(response){
                        return response.data;
                    })
                    .cath(function(response){
                        return $q.reject("Error:!!!");
                    });
            }

    });

})();
