(function(){
    "use strict";
    angular.module("app", ["common", "ctrlTestModule", "srvTestModule"])
        .decorator("userService", userServicesLog)
       // .config(appConfig)
        .run(appRun);

    //function appConfig(){
    //
    //};
    function appRun(){};

})();