(function(){
    "use strict";
    angular
        .module("listOfMaterials")
        .service("listOfMaterialsServices", listOfMaterialsServices);

    function listOfMaterialsServices(materialsValue){
        this.model = {};
        this.model.materials = materialsValue.data.materials;
        this.model.verificationRestrictionsDictionary = materialsValue.data.verificationRestrictionsDictionary;

        this.addMaterial = function(){

            if(this.model.materials.length < 50){//ограничение на количество строк
                var newMaterial = {
                    materialName: "",
                        contactProductA: "1",
                        stagesProcessesB: "1",
                        criticalityC: "1",
                        numberOfRiskForMaterial: 1,
                        levelOfRisk: ""
                };

                this.model.materials.push(newMaterial);
            }
        };

        this.deleteMaterial = function(index){
            this.model.materials.splice(index, 1);
        };
    }
})();
