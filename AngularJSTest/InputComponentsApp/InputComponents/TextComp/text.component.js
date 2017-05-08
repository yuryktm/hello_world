(function(){
    "use strict"

    angular.module('inputComponentsApp').component('textComp', {
        templateUrl: '../InputComponentsApp/InputComponents/TextComp/text-view.html',
        controller: textCompCtrl,
        bindings: {
            value: '=',
            item: '<'
        }
    });

    function textCompCtrl() {
       /// var vm = this;
    }
})();
