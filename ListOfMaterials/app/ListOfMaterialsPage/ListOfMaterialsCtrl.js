(function(){
    "use strict";
    angular.module("listOfMaterials")
        .controller("listOfMaterialsCtrl", listOfMaterialsCtrl);

    function listOfMaterialsCtrl($scope, listOfMaterialsServices){
        $scope.model = listOfMaterialsServices.model;

        $scope.deleteMaterial = function(index){
            listOfMaterialsServices.deleteMaterial(index);
        };

        $scope.addMaterial = function(){
            listOfMaterialsServices.addMaterial();
        }
    }
})();
