(function(){
    "use strict";
    angular.module("app", ["common", "ctrlTestModule", "srvTestModule"])
        .config(appConfig)
        .run(appRun);

    function appConfig(){

    };
    function appRun(){};

})();