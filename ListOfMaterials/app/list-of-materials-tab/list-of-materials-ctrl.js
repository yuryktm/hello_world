(function(){
    "use strict";
    angular.module("ListOfMaterialsTab")
        .controller("ListOfMaterialsCtrl", ListOfMaterialsCtrl);

    ListOfMaterialsCtrl.$inject = ['$scope', 'ListOfMaterialsServices'];

    function ListOfMaterialsCtrl($scope, listOfMaterialsServices){
        $scope.model = listOfMaterialsServices.model;

        listOfMaterialsServices.updateDate();

        $scope.deleteMaterial = function(index){
            listOfMaterialsServices.deleteMaterial(index);
        };

        $scope.addMaterial = function(){
            listOfMaterialsServices.addMaterial();
        }

        //режим отображение стр, true - просмотр, false - редактирование
        $scope.pageView = true;

        //кнопки
        $scope.btnEdit = function(){
            $scope.pageView = !$scope.pageView;
        }

        $scope.btnCancel = function(){
            $scope.pageView = !$scope.pageView;
        }

        $scope.btnSave = function(){
            $scope.pageView = !$scope.pageView;
        }

        //calculate
        $scope.calculate = function(index){
            listOfMaterialsServices.calculate(index);
        }
    }
})();
