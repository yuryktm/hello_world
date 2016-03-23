(function(){
    "use strict";
    angular.module("vendor.view")
        .controller("ListOfMaterialsCtrl", ListOfMaterialsCtrl);

    ListOfMaterialsCtrl.$inject = ['$scope', 'ListOfMaterialsServices'];

    function ListOfMaterialsCtrl($scope, listOfMaterialsServices){
        $scope.model = listOfMaterialsServices.model;

        listOfMaterialsServices.getMaterials();

        $scope.deleteMaterial = function(index){
            listOfMaterialsServices.deleteMaterial(index);
        };

        $scope.addMaterial = function(){
            listOfMaterialsServices.addMaterial();
        }

        //режим отображение стр, true - просмотр, false - редактирование
        $scope.pageView = true;

        //calculate
        $scope.calculate = function(index){
            listOfMaterialsServices.calculate(index);
        }

        //***************************************** кнопки
        $scope.btnEdit = function(){

            //if($scope.access){todo:access
                $scope.oldMaterials = angular.copy($scope.model.materials);
                $scope.pageView = !$scope.pageView;
            //}
        }

        $scope.btnCancel = function(){
            $scope.model.materials = $scope.oldMaterials;
            $scope.pageView = !$scope.pageView;
        }

        $scope.btnSave = function(){

            function validate(){
                return $scope.model.materials.every(function(item){
                    return !!item.materialName;
                });
            }

            if(!validate()){return;}

            listOfMaterialsServices.saveMaterials(function(){
                $scope.pageView = !$scope.pageView;
            });
        }
    }
})();
