(function(){
    "use strict";
    angular.module("ctrlTestModule").controller("twoCtrl", twoCtrl);

    function twoCtrl($scope, $rootScope){
        $scope.data = {};
        $scope.data.number = 22222;

        $rootScope.$on("updateNumber", function(event, args){
            $scope.data[args.type] = args.value;
        });

        //отслеживание изменений на скоупе
        //$scope.$watchCollection()
        //$scope.$watchGroup()
        $scope.$watch("data.number", function(newVal, oldVal){
            $scope.dateUpdate = Date();
        });


        $scope.clickBtnTwoCtrl = function(){
            alert("clickBtnTwoCtrl");
        };
    }

})();
