(function(){
    "use strict"

    angular.module("userListApp", ["ngTable"])
        .value("userList", [
            { name: "User123", age: 15},
            { name: "User5345", age: 3453}
            ])
        .controller("UserListCtrl", userListCtrl);

   // userListCtrl.$inject = ['$scope', 'userList'];
//  tableFactory.$inject = ['NgTableParams'];
    // function userListCtrl($scope, userList){
    //     $scope.userList = userList;
    // };

    userListCtrl.$inject = ["$scope", "$log", "userList", "NgTableParams"];

    function userListCtrl($scope, $log, userList, NgTableParams){
        var vm = this;
        vm.userList = userList;
        vm.log = Date();
        vm.btnClick = btnClick;

        //ngTable
        vm.tableParams = new NgTableParams({}, { dataset: userList});


        //
        function btnClick() {
            alert('click!!!');
            vm.log = Date();
        };


        $scope.$watch('vm.logs', function(current, original) {
            $log.info('vm.title was %s', original);
            $log.info('vm.title is now %s', current);
        });

    };

})();


