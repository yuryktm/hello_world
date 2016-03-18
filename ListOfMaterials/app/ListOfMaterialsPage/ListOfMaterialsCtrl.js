//(function(){
//    "use strict";
//    angular.module("listOfMaterials")
//        .controller("listOfMaterialsCtrl", listOfMaterialsCtrl);
//
//    function listOfMaterialsCtrl($scope, listOfMaterialsServices){
//        $scope.model = listOfMaterialsServices.model;
//
//        $scope.deleteMaterial = function(index){
//            listOfMaterialsServices.deleteMaterial(index);
//        };
//
//        $scope.addMaterial = function(){
//            listOfMaterialsServices.addMaterial();
//        }
//
//        //режим отображение стр, true - просмотр, false - редактирование
//        $scope.pageView = true;
//
//        //кнопки
//        $scope.btnEdit = function(){
//            $scope.pageView = !$scope.pageView;
//        }
//
//        $scope.btnCancel = function(){
//            $scope.pageView = !$scope.pageView;
//        }
//
//        $scope.btnSave = function(){
//            $scope.pageView = !$scope.pageView;
//        }
//
//        //$scope.$watch('model.materials', function() {
//        //    console.log('hey, myVar has changed!');
//        //});
//
//        $scope.calculate = function(index){
//            listOfMaterialsServices.calculate(index);
//        }
//    }
//})();

angular.module('ListOfMaterialsCtrl', []).controller('listOfMaterialsCtrl', function() {
    //this.value = 'Hello World!';
    console.log("test");
});
