(function(){
    "use strict";
    angular
        .module("listLetter")
        .directive("listLetterDir", listLetterDir);

        function listLetterDir(){
            return {
                restrict: "A",
                templateUrl: "listLetters/listLettersView.html"
            }
        }
})();
