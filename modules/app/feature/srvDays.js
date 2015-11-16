(function(){
    "use strict";
    angular
        .module("app")
        .service("days", days);

    function days(nowVal){

        this.day = nowVal.getDay();
        this.tomorrow = (this.day + 1) % 7;

    }

})();

