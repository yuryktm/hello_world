(function(){
    "use strict";
    angular
        .module("contractor.edit")
        .directive("infoDir", infoDir);

    infoDir.$inject = [];

    function infoDir(){
        return {
            restrict: "A",
            templateUrl: "app/info-tab/info-view.html"
        }
    }
})();