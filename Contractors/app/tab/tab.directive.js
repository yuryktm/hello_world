(function(){
    "use strict";
    angular
        .module("contractor.edit")
        .directive("tabDir", tabDir);

    tabDir.$inject = [];

    function tabDir(){
        return {
            restrict: "A",
            templateUrl: "app/tab/tab-view.html"
        }
    }
})();
