(function(){
    "use strict";
    angular
        .module("ListOfMaterialsTab")
        .value("materialsValue", {data: {
            materials: [
                {
                    materialName: "asdfkjh45345345skjd",
                    contactProductA: "2",
                    stagesProcessesB: "3",
                    criticalityC: "5",
                    numberOfRiskForMaterial: "33",
                    levelOfRisk: "Средний"
                },
                {
                    materialName: "asdfkjhskjd",
                    contactProductA: "5",
                    stagesProcessesB: "4",
                    criticalityC: "2",
                    numberOfRiskForMaterial: "33",
                    levelOfRisk: "Средний"
                }

            ],

            verificationRestrictionsDictionary: [ "1", "2", "3", "-", "Производитель", "дистрибьютор АФС" ]

        }});
})();
