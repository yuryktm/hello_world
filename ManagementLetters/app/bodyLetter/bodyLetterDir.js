(function(){
    "use strict";
    angular
        .module("bodyLetter")
        .directive("bodyLetterDir", bodyLetterDir);

    function bodyLetterDir(){
        return {
            restrict: "A",
            templateUrl: "bodyLetter/bodyLetterView.html"
        }
    }
})();
