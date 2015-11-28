(function(){
    "use strict";
    angular.module("srvTestModule",[])
        .config(appConfig)//задаю конфиг для provider сервиса
        //.config(serviceDecoration) //задаю конфиг для сервиса декорирования
        // или как ниже .decorator("userService", userServicesLog) добавлен в app
        .controller("srvTestCtrl", srvTestCtrl);

    //имя сервиса - prvService + Provider
    function appConfig(prvServiceProvider){
        prvServiceProvider.setText('PRPRPRPRPRPRPRPR');
    }

    //function serviceDecoration($provide){
    //    $provide.decorator('userService', userServicesLog)
    //}

    function srvTestCtrl($scope, userService, personService, prvService){
        console.log(userService.getUser());
        console.log(userService);
        userService.setUser("sdfsdf");

        console.log(personService.setName("dddd"));
        console.log("personService  " + personService.getName());
        //for(var i = 0 ;i<10000;i++){
        //    userService.setUser("sdfsdf" + i);
        //    console.log(userService.getUser());
        //}

        console.log(prvService);
        prvService.fff('asdf asdf asdf');
    }

})();
