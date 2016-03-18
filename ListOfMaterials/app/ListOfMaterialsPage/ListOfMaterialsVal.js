(function(){
    "use strict";
    angular
        .module("listOfMaterials")
        .value("materialsValue", {data: {
            materials: [
                {
                    materialName: "asdfkjh45345345skjd",
                    contactProductA: "2",
                    stagesProcessesB: "3",
                    criticalityC: "5",
                    numberOfRiskForMaterial: 33,
                    levelOfRisk: "Средний"
                },
                {
                    materialName: "asdfkjhskjd",
                    contactProductA: "5",
                    stagesProcessesB: "4",
                    criticalityC: "2",
                    numberOfRiskForMaterial: 33,
                    levelOfRisk: "Средний"
                }

            ],

            verificationRestrictionsDictionary: [
                    { id : "1", label: "1" },
                    { id : "2", label: "2" },
                    { id : "3", label: "3" },
                    { id : "4", label: "4" },
                    { id : "5", label: "5" },
                    { id : "6", label: "6" },
                    { id : "7", label: "7" },
                    { id : "8", label: "8" },
                    { id : "9", label: "9" },
                    { id : "10", label: "10" },
                    { id : "11", label: "Производитель" },
                    { id : "12", label: "дистрибьютор АФС" }
            ]
        }});
})();
