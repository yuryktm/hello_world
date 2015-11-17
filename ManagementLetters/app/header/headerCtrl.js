(function(){
    "use strict";
    angular.module("headerModule")
        .controller("headerCtrl", headerCtrl);

    function headerCtrl($scope, letterServices){
        $scope.removeLetter = function(){
            if(letterServices.existCheckedItems()){
                letterServices.removeCheckedLetters();
            }else{
                letterServices.removeSelectLetter();
            }

        };

        $scope.checkReaded = function(){
            if(letterServices.existCheckedItems()){
                letterServices.checkItemsReaded();
            }else{
                letterServices.checkItemReaded();
            }
        };
    }
})();
