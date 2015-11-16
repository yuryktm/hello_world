(function(){
    "use strict";
    angular.modal("listLetter")
        .controller("listLetterCtrl", listLetterCtrl);

        function listLetterCtrl($scope){

            var letters = [
                {
                    who:"zxcv@zxcv.zx",
                    subject:"zxc",
                    body:"zxc zxc zxcv"},
                {
                    who:"asdf@asdf.sd",
                    subject:"asdf",
                    body:"asdf asdf asdf"}];

            $scope.letters = letters;
        }
})();
