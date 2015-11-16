(function(){
    "use strict";
    angular
        .module("app")
        .directive("dirMyhh", hh); //dirMyhh (js) = dir-myhh(html)
        //дир запускается когда встречается в html

    function hh(){
        //возвращается конфигаруционный объект
        return {

            //1 скойп контролера в рамках которого используется директива, но не всегда
            //2 jqury/jqury lite oбъект | элемент к которому применяется директива
            //3 атрибуты элемента
            link: function(scope, element, attrs){
                console.log(element);
                console.log(attrs);
                if(scope.day === attrs["dirMyhh"])
                    element.css("color","red");

                }
        }


    }

})();

