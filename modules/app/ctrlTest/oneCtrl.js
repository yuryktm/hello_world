(function(){
    "use strict";
    angular.module("ctrlTestModule").controller("oneCtrl", oneCtrl);

    function oneCtrl($scope, $rootScope, mainSrv){
        $scope.resetNumber = function(){
            mainSrv.resetNumber();
        };

        $scope.updateNumber = function(){
            $rootScope.$emit("updateNumber",
                {
                    type: 'number',
                    value: 111111 });
        };

        $rootScope.$on("updateNumber.oneCrtl", function(event, args){
            $scope[args.type] = args.value;
        });
    }
})();