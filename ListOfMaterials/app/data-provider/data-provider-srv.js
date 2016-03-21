(function(){
    "use strict";
    angular
        .module("DataProvider")
        .factory("DataProviderServices", DataProviderServices);

    DataProviderServices.$inject = ['$http', '$q'];

    function DataProviderServices($http, $q){

        return {
            getMaterials: getMaterials
        };

        function sendResponseData(response){
            return response.data;
        }

        function sendResponseError(error){
            return $q.reject("Error get data, data: " + error.data);
        }

        function getMaterials(){
            //return $http({
            //            method: 'GET',
            //            url: 'https://http5bin.org/get'
            //            })
            //            .then(sendResponseData)
            //            .catch(sendResponseError);

            return $http.get('data-provider/materials.json')
                .success(sendResponseData);
        }
    }
})();
