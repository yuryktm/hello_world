(function(){
    "use strict";
    angular.module("vendor.view")
        .controller("TabCtrl", TabCtrl);

    TabCtrl.$inject = ['$scope', 'ListOfMaterialsServices', 'ListApprovalStatusServices'];

    function TabCtrl($scope, listOfMaterialsServices, listApprovalStatusServices){
        $scope.tab = "list-materials";
        listOfMaterialsServices.getMaterials();

        $scope.setTab = function (tabId) {
            $scope.tab = tabId;

            switch (tabId){
                case "list-materials":
                    console.log("list-materials pageView:" + listOfMaterialsServices.getPageMode().pageView);
                    listOfMaterialsServices.getMaterials();
                    break;
                case "list-approval-status":
                    listApprovalStatusServices.getApprovalStatusList();
                    break;
            };
        };

        $scope.isSet = function (tabId) {
            return $scope.tab === tabId;
        };
    }
})();
