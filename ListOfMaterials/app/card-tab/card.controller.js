(function(){
    "use strict";
    angular.module("vendor.view")
        .controller("CardCtrl", CardCtrl);

    CardCtrl.$inject = ['$scope', 'CardServices'];

    function CardCtrl($scope, cardServices){
        $scope.model = cardServices.model;

        //режим отображение стр, true - просмотр, false - редактирование
        $scope.pageMode = cardServices.model.pageMode;

        //$scope.deleteMaterial = function(index){
        //    listOfMaterialsServices.deleteMaterial(index);
        //};
        //
        //$scope.addMaterial = function(){
        //    listOfMaterialsServices.addMaterial();
        //};

        //calculate
        //$scope.calculate = function(index){
        //    listOfMaterialsServices.calculate(index);
        //};

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
