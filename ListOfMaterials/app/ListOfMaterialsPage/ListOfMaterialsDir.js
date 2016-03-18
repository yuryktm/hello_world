(function(){
    "use strict";
    angular
        .module("listOfMaterials")
        .directive("listMaterialsDir", listMaterialsDir);

    function listMaterialsDir(){
        return {
            restrict: "A",
            templateUrl: "ListOfMaterialsPage/ListOfMaterialsView.html"
        }
    }
})();