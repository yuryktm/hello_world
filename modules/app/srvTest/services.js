(function(){
    "use strict";
    angular.module("srvTestModule")
        .constant("const1", "cccccc")
        //фектори явно возвращает объект
        .factory("userService", userService)
        //конструирует через this как функция конструктор
        .service("personService",Person)
        //сервис который можно конфигурировать
        .provider("prvService", prvService);

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

    function prvService(const1){
        var str = const1;

        return { //provider obj
            $get: $get,
            setText: setText
        };

        function setText(value){
            if(value){
                str = value;
                return this;
            }
            else{
                return str;
            }

        }

        function $get(){
            return { // service obj
                fff: fff
            }

            function fff(val){
                console.log("prv srv_ " + str + "_" + val);
            }
        }
    }

})();


