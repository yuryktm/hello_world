(function(){
    "use strict";
    angular.module("contractor.edit")
        .controller("TabCtrl", TabCtrl);

    TabCtrl.$inject = ['$scope'];

    function TabCtrl($scope){

        $scope.tab = "info";
        $scope.setTab = function (tabId) {

            if(tabId === $scope.tab){ return; }

            $scope.tab = tabId;

            //switch (tabId){
            //    case "info":
            //        break;
            //    case "others":
            //        break;
            //};
        };

        $scope.isSet = function (tabId) {
            return $scope.tab === tabId;
        };
    }
})();
