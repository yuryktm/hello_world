(function(){
    "use strict";
    angular
        .module("commonFilters")
        .filter("selectedLetter", selectedLetter);

    function selectedLetter(){
        return function(input){
            for(var i = 0;i < input.length; i++){
                if(input[i].selected){
                    break;
                }
            }
            return input[i];
        };
    }

})();

