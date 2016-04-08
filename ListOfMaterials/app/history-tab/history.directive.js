(function(){
    "use strict";
    angular
        .module("vendor.view")
        .directive("historyDir", historyDir);

    historyDir.$inject = [];

    function historyDir(){
        return {
            restrict: "A",
            templateUrl: "history-tab/history-view.html"
        }
    }
})();