(function(){
    "use strict";
    angular
        .module("headerModule")
        .directive("headerDir", headerDir);

    function headerDir(){
        return {
            restrict: "A",
            templateUrl: "header/headerView.html"
        }
    }
})();

