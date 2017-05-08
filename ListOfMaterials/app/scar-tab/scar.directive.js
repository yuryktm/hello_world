(function(){
    "use strict";
    angular
        .module("vendor.view")
        .directive("scarDir", scarDir);

    scarDir.$inject = [];

    function scarDir(){
        return {
            restrict: "A",
            templateUrl: "scar-tab/scar-view.html"
        }
    }
})();