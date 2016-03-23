(function(){
    "use strict";
    angular.module("vendor.view")
        .controller("ListApprovalStatusCtrl", ListApprovalStatusCtrl);

    ListApprovalStatusCtrl.$inject = ['$scope', 'ListApprovalStatusServices'];

    function ListApprovalStatusCtrl($scope, listApprovalStatusServices){

        $scope.model = listApprovalStatusServices.model;

        listApprovalStatusServices.getApprovalStatusList();
    }
})();
