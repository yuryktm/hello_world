(function(){
    "use strict";
    angular.module("vendor.view")
        .controller("TabCtrl", TabCtrl);

    TabCtrl.$inject = ['$scope', '$uibModal', 'ListOfMaterialsServices', 'ListApprovalStatusServices', 'CardServices', '$location'];

    function TabCtrl($scope, $uibModal, listOfMaterialsServices, listApprovalStatusServices, cardServices, $location){
        var obj = $location.search();//#?v1=p1
        console.log(obj);//obj.v1

        $scope.tab = "card";
        cardServices.getCard();

        $scope.setTab = function (tabId) {

            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'tab/modalContent.html',
                controller: 'ModalInstanceCtrl',
                size: 'sm',
                resolve: {
                    title: "Сообщение",
                    text: "dflkgjkldjglkdjflkg?",
                    ok: "okkk",
                    items: function () {
                        return 'ok';//$scope.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                //$log.info('Modal dismissed at: ' + new Date());
            });



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

    /*************************************/

    //https://angular-ui.github.io/bootstrap/#/modal
    angular.module('vendor.view').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

        //$scope.items = items;
        //$scope.selected = {
        //    item: $scope.items[0]
        //};

        $scope.ok = function () {
            $uibModalInstance.close($scope.selected.item);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    });

})();
