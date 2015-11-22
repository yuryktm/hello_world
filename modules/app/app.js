(function(){
    "use strict";
    angular.module("app", ["common","ctrlTestModule"])
        .config(appConfig)
        .run(appRun);

    function appConfig(){

    };
    function appRun(){};

})();