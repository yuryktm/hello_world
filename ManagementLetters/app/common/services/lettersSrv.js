(function(){
    "use strict";
    angular
        .module("commonServices")
        .service("letterServices", letterServices);

    function letterServices(letterVal){
        this.letters = letterVal.data.letters;
    }

})();