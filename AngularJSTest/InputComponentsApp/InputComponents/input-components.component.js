(function(){
    "use strict"

    angular.module('inputComponentsApp').component('inputComponents', {
        templateUrl: '../InputComponentsApp/InputComponents/input-components-view.html',
        controller: inputComponentsCtrl,
        bindings: {
            vm: '='
        }
    });

    function inputComponentsCtrl() {
       var vm = this;

       vm.getItem = function(index){

           var item = vm.vm.data.mandatoryFields.filter(function (x) {
               return x.propertyId === index;
           });

           return item[0];
       }

       vm.getValue = function(propertyId){

           if(!vm.vm.data.customPropertiesJson[propertyId]){
               vm.vm.data.customPropertiesJson[propertyId] = [{ displayValue: '',  value: ''}];
           }

           return vm.vm.data.customPropertiesJson[propertyId][0];
       }
    }

})();

