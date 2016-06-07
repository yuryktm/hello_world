(function(){
    "use strict";
    angular.module("vendor.view")
        .controller("TabCtrl", TabCtrl);

    TabCtrl.$inject = ['$scope', '$uibModal', 'ListOfMaterialsServices', 'ListApprovalStatusServices', 'CardServices',
        '$location', 'SCARServices', 'RiskAssessmentServices', 'HistoryServices'];

    function TabCtrl($scope, $uibModal, listOfMaterialsServices, listApprovalStatusServices, cardServices,
                     $location, sCARServices, riskAssessmentServices, historyServices){
        var obj = $location.search();//#?v1=p1
        console.log(obj);//obj.v1

        $scope.tab = "card";
        cardServices.getCard();

        $scope.setTab = function (tabId) {
            return;
            if(tabId === $scope.tab){
                return;
            }

            //если уходим с вкладки не сохранив
            if($scope.tab === 'card' && !cardServices.model.pageMode.pageView) {

                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'tab/modalContent.html',
                    controller: 'ModalInstanceCtrl',
                    size: 'sm',
                    backdrop: 'static',
                    keyboard: false,
                    resolve: {
                        params: function () {
                            return {
                                title: "Сообщение",
                                text: "Сохранить изменения?",
                                ok: "Да",
                                cancel: "Отменить "
                            }
                        }
                    }
                });

                modalInstance.result.then(function (selectedItem) {
                    //$scope.selected = selectedItem;
                }, function () {
                    //$log.info('Modal dismissed at: ' + new Date());
                });
            }

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
                case "scar":
                    sCARServices.getSCARList();
                    break;
                case "risk-assessment":
                    riskAssessmentServices.getRiskAssessment();
                    break;
                case "history":
                    historyServices.getHistoryList();
                    break;
            };
        };

        $scope.isSet = function (tabId) {
            return $scope.tab === tabId;
        };
    }

    /*************************************/

    //https://angular-ui.github.io/bootstrap/#/modal
    angular.module('vendor.view').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, params) {

        $scope.params = params;

        $scope.ok = function () {
            $uibModalInstance.close('ok');
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    });

})();
