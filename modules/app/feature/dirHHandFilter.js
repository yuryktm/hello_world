(function(){
    "use strict";
    angular
        .module("app")
        .directive("dirMyhh", hh);

    function hh($filter){
        var dayFilter = $filter("dayName");

        return {
            link: function(scope, element, attrs){
                if(dayFilter(scope.day) === attrs["dirMyhh"]){
                    element.css("color","red");
                }
            }
        }
    }
})();

