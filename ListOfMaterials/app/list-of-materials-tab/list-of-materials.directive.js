(function(){
    "use strict";
    angular
        .module("vendor.view")
        .directive("listMaterialsDir", listMaterialsDir);

    listMaterialsDir.$inject = [];

    function listMaterialsDir(){
        return {
            restrict: "A",
            templateUrl: "list-of-materials-tab/list-of-materials-view.html"
        }
    }
})();