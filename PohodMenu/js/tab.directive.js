(function(){
    "use strict";
    angular
        .module("vendor.view")
        .directive("tabDir", tabDir);

    tabDir.$inject = [];

    function tabDir(){
        return {
            restrict: "A",
            templateUrl: "tab/tab-view.html"
        }
    }
})();
