(function(){
    "use strict";
    angular.module("srvTestModule",[])
        .controller("srvTestCtrl", srvTestCtrl);

    function srvTestCtrl($scope, userService, personService){
        console.log(userService.getUser());
        console.log(userService);
        userService.setUser("sdfsdf");


        console.log(personService.setName("dddd"));
        console.log("personService  " + personService.getName());
        //for(var i = 0 ;i<10000;i++){
        //    userService.setUser("sdfsdf" + i);
        //    console.log(userService.getUser());
        //}
    }

})();
