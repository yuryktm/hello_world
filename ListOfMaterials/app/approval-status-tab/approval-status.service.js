(function(){
    "use strict";
    angular
        .module("vendor.view")
        .service("ListApprovalStatusServices", ListApprovalStatusServices);

    ListApprovalStatusServices.$inject = ['$http'];

    function ListApprovalStatusServices($http){
        this.model = {};
        var model = this.model;

        this.getApprovalStatusList = function(){
            var url = "approval-status-tab/approvalStatusList.json";
            console.log('getApprovalStatusList');
            angular.element(document.querySelectorAll(".preloader")).css('display', 'inline');
            $http.get(url)
                .then(function(response){
                    if(response.data){
                        model.approvalStatusList = response.data.approvalStatusList;
                        angular.element(document.querySelectorAll(".preloader")).css('display', 'none');
                    }
                },function(response){
                    console.log(response.statusText);
                }
            );
        };
    }
})();
