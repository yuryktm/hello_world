(function(){
    "use strict";
    angular
        .module("vendor.view")
        .directive("listApprovalStatusDir", listApprovalStatusDir);

    listApprovalStatusDir.$inject = [];

    //Вкладка согласования статусов
    function listApprovalStatusDir(){
        return {
            restrict: "A",
            templateUrl: "approval-status-tab/approval-status-view.html"
        }
    }
})();