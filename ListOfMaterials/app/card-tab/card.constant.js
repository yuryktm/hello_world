(function(){
    "use strict";
    angular
        .module("vendor.view")
        .constant("consts", {
            //VERIFICATION_RESTRICTIONS_DICTIONARY: [ "", "1", "2", "3", "-", "Производитель", "дистрибьютор АФС" ],
            //NUMBER_RISK_MATERIAL_DICTIONARY: [ "", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
            //    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "-" ],
            organizationLegalFormVendorList: [{key: "1", value: 'БУ'},{key: "2", value: 'БФ'}, {key: "3", value: 'ГУП'}],
            URL_POST: "card-tab/card.json",
            URL_GET: "card-tab/card.json"
        });
})();
