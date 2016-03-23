(function(){
    "use strict";
    angular
        .module("vendor.view")
        .constant("consts", {
            VERIFICATION_RESTRICTIONS_DICTIONARY: [ "", "1", "2", "3", "-", "Производитель", "дистрибьютор АФС" ],
            NUMBER_RISK_MATERIAL_DICTIONARY: [ "", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
                "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "-" ],
            URL_POST: "list-of-materials-tab/materials.json",
            URL_GET: "list-of-materials-tab/materials.json"
        });
})();
