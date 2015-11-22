(function(){
    "use strict";
    angular.module("ctrlTestModule").service("mainSrv", mainSrv);

    function mainSrv($rootScope){
        this.resetNumber = function(){
            //отправит событие всем скоупам
            var data =  { type: 'number', value: 0};
            $rootScope.$broadcast("updateNumber.oneCrtl", data);
        };


    }

})();
