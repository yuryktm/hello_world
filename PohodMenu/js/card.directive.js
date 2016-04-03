(function(){
    "use strict";
    angular
        .module("vendor.view")
        .directive("cardDir", cardDir);

    cardDir.$inject = [];

    function cardDir(){
        return {
            restrict: "A",
            templateUrl: "card-tab/card-view.html"
        }
    }
})();