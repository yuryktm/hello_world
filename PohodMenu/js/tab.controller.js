(function(){
    "use strict";
    angular.module("vendor.view")
        .controller("TabCtrl", TabCtrl);

    TabCtrl.$inject = ['$scope', 'ListOfMaterialsServices', 'ListApprovalStatusServices', 'CardServices', '$location'];

    function TabCtrl($scope, listOfMaterialsServices, listApprovalStatusServices, cardServices, $location){
        var obj = $location.search();//#?v1=p1
        console.log(obj);//obj.v1

        $scope.tab = "card";
        cardServices.getCard();

        $scope.setTab = function (tabId) {
            $scope.tab = tabId;

            switch (tabId){
                case "card":
                    console.log("card pageView:" + cardServices.getPageMode().pageView);
                    cardServices.getCard();
                    break;
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
