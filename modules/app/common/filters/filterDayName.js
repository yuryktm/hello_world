(function(){
    "use strict";
    angular
        .module("commonFilters")
        .filter("dayName", dayName);

    function dayName(){
        var dn = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      return function(input){
          return angular.isNumber(input) ? dn[input] : input;
      };
    }

})();

