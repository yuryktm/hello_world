(function(){
    "use strict";
    angular.module("srvTestModule")
        //фектори явно возвращает объект
        .factory("userService", userService)
        //конструирует через this как функция конструктор
        .service("personService",Person);

    function userService(){
        var user = "nbnbnb";
        var date = Date();
        return {
            getUser: function(){
                return user + " " + date;
            },
            setUser: function(value){
                user = value;
            }
        };
    }

})();

