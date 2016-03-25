(function(){
    "use strict";
    angular.module("vendor.view")
        .controller("ListOfMaterialsCtrl", ListOfMaterialsCtrl);

    ListOfMaterialsCtrl.$inject = ['$scope', 'ListOfMaterialsServices'];

    function ListOfMaterialsCtrl($scope, listOfMaterialsServices){
        $scope.model = listOfMaterialsServices.model;

        //режим отображение стр, true - просмотр, false - редактирование
        $scope.pageMode = listOfMaterialsServices.model.pageMode;

        $scope.deleteMaterial = function(index){
            listOfMaterialsServices.deleteMaterial(index);
        };

        $scope.addMaterial = function(){
            listOfMaterialsServices.addMaterial();
        };

        //calculate
        $scope.calculate = function(index){
            listOfMaterialsServices.calculate(index);
        };

        //***************************************** кнопки
        $scope.btnEdit = function(){

            //if($scope.access){todo:access
                $scope.oldMaterials = angular.copy($scope.model.materials);
                $scope.pageMode.pageView = !$scope.pageMode.pageView;
            //}
        };

        $scope.btnCancel = function(){
            $scope.model.materials = $scope.oldMaterials;
            $scope.pageMode.pageView = !$scope.pageMode.pageView;
        };

        $scope.btnSave = function(){

            function validate(){
                return $scope.model.materials.every(function(item){
                    return !!item.materialName;
                });
            }

            if(!validate()){return;}

            listOfMaterialsServices.saveMaterials(function(){
                $scope.pageMode.pageView = !$scope.pageView;
            });
        };
    }
})();
