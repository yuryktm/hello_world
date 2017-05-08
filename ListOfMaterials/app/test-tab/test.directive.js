(function(){
    "use strict";

    angular.module("vendor.view").directive("testDir", testDir);

    testDir.$inject = [];

    function testDir(){
        return {
            restrict: "A",
            templateUrl: "test-tab/test-view.html"
        };
    };
})();