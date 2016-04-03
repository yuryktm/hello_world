(function(){
    "use strict";
    angular.module("vendor.view")
        .controller("CardCtrl", CardCtrl);

    CardCtrl.$inject = ['$scope', 'CardServices'];

    function CardCtrl($scope, cardServices){
        $scope.model = cardServices.model;

        //режим отображение стр, true - просмотр, false - редактирование
        $scope.pageMode = cardServices.model.pageMode;

        $scope.addAudit = function(){
            cardServices.addAudit();
        };

        $scope.deleteAudit = function(index, fileIndex){
            cardServices.deleteAudit(index, fileIndex);
        };

        $scope.addAuditFile = function(index){
            cardServices.addAuditFile(index);
        };

        $scope.deleteAuditFile = function(index){
            cardServices.deleteAuditFile(index);
        };

        /*************************************************************************************************************/

        $scope.addVendorWorksheet = function(){
            cardServices.addVendorWorksheet();
        };

        $scope.deleteVendorWorksheet = function(index){
            cardServices.deleteVendorWorksheet(index);
        };

        //***************************************** кнопки
        $scope.btnEdit = function(){

            //if($scope.access){todo:access
                $scope.oldCard = angular.copy($scope.model.card);
                $scope.pageMode.pageView = !$scope.pageMode.pageView;
            //}
        };

        $scope.btnCancel = function(){
            $scope.model.card = $scope.oldCard;
            $scope.pageMode.pageView = !$scope.pageMode.pageView;
        };

        $scope.btnSave = function(){

            //function validate(){
            //    return $scope.model.cars.every(function(item){
            //        return !!item.materialName;
            //    });
            //}
            //
            //if(!validate()){return;}

            cardServices.saveCard(function(){
                $scope.pageMode.pageView = !$scope.pageView;
            });
        };
    }
})();
