(function(){
    "use strict";
    angular
        .module("vendor.view")
        .constant("consts", {
            VERIFICATION_RESTRICTIONS_DICTIONARY: [ "", "1", "2", "3", "-", "Производитель", "дистрибьютор АФС" ],
            NUMBER_RISK_MATERIAL_DICTIONARY: [ "", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
                "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "-" ],
            LIST_OF_MATERIALS_TAB_URL_POST: "list-of-materials-tab/materials.json",
            LIST_OF_MATERIALS_TAB_URL_GET: "list-of-materials-tab/materials.json",
            //card tab
            //organizationLegalFormVendorList: [{key: "1", value: 'БУ'},{key: "2", value: 'БФ'}, {key: "3", value: 'ГУП'}],
            ORGANIZATION_LEGAL_FORM_VENDOR_LIST: ["АБ", "АНО", "АУ", "БлагУ", "БУ", "БФ", "ГУП", "ЗАО", "Иное", "ИП", "КА", "КПСЗФ",
            "КУ", "КФХ", "КХ", "МКП", "МУП", "НП", "ОАО", "ОБП", "ОКФХ", "ОО", "ООО", "ОУ", "ОФ", "ОЮЛ", "ПК", "ПККСХ", "ПО", "ПОБ",
            "ПТК", "ПЮЛ", "РО", "СА", "СОДНТ", "СПК", "СПОК", "СПОПЮЛ", "СППК", "СПСК", "СПСнК", "ТнВ", "ТПП", "ТСЖ", "УАН", "ФГУП",
            "ФИЛ", "ФЛ", "Фонд", "ЧУ"],
            CARD_TAB_URL_POST: "card-tab/card.json",
            CARD_TAB_URL_GET: "card-tab/card.json"
        });
})();
