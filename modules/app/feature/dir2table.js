(function(){
    "use strict";
    angular
        .module("app")
        .directive("dirTable", dirTable); //dirMyhh (js) = dir-myhh(html)
    //дир запускается когда встречается в html

    function dirTable(){
        //возвращает конфигурационный объект
        return {
            restrict: "A",         //A -директиву будем использовать как атрибут
            templateUrl:"feature/table.html"
        }
    }

})();

