(function(){
    "use strict";
    angular.module("vendor.view")
        .controller("ListApprovalStatusCtrl", ListApprovalStatusCtrl);

    ListApprovalStatusCtrl.$inject = ['$scope', '$timeout', 'ListApprovalStatusServices'];

    function ListApprovalStatusCtrl($scope, $timeout, listApprovalStatusServices){

        $scope.model = listApprovalStatusServices.model;

        //$scope.today = function() {
        //    $scope.dt = new Date();
        //};
        //$scope.today();


        //$scope.repeatArray = [1];
        //
        //$scope.showWeeks = true;
        //$scope.toggleWeeks = function () {
        //    $scope.showWeeks = ! $scope.showWeeks;
        //};
        //
        //$scope.clear = function () {
        //    $scope.dt = null;
        //};

        // Disable weekend selection
        //$scope.disabled = function(date, mode) {
        //    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
        //};
        //
        //$scope.toggleMin = function() {
        //    $scope.minDate = ( $scope.minDate ) ? null : new Date();
        //};
        //$scope.toggleMin();

        $scope.open = function() {
            $timeout(function() {
                $scope.opened = true;
            });
        };

        $scope.dateOptions = {
            'year-format': "'yy'",
            'starting-day': 1
        };



        //listApprovalStatusServices.getApprovalStatusList();
    }
})();
