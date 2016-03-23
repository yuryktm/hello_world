(function(){
    "use strict";
    angular
        .module("vendor.view")
        .service("ListOfMaterialsServices", ListOfMaterialsServices);

    ListOfMaterialsServices.$inject = ['consts', '$http'];

    function ListOfMaterialsServices(consts, $http){
        this.model = {};
        var model = this.model;

        this.model.verificationRestrictionsDictionary = consts.VERIFICATION_RESTRICTIONS_DICTIONARY;
        this.model.numberRiskMaterialDictionary = consts.NUMBER_RISK_MATERIAL_DICTIONARY;

        this.addMaterial = function(){

            if(this.model.materials.length < 50){//ограничение на количество строк
                var newMaterial = {
                    materialName: "",
                        contactProductA: "",
                        stagesProcessesB: "",
                        criticalityC: "",
                        numberOfRiskForMaterial: "",
                        levelOfRisk: "Низкий"
                };

                this.model.materials.push(newMaterial);
            }
        };

        this.deleteMaterial = function(index){

            this.model.materials.splice(index, 1);

            if(this.model.materials.length == 0){
                this.addMaterial();
            }
        };

        this.getMaterials = function(){
            $http.get(consts.URL_GET)
                .then(function(response){
                    if(response.data){
                        model.materials = response.data.materials;
                    }
                },function(response){
                    console.log(response.statusText);
                }
            );
        };

        this.saveMaterials = function(callback){
            $http.post(consts.URL_POST, {"data": model.materials})
                .then(function(response){
                    callback();
                },function(response){
                    console.log(response.statusText);
                }
            );
        };

        this.calculate = function(index){

            //вычисление поля "Уровень риска"
            var material = this.model.materials[index];
            var a = parseFloat(material.contactProductA),
                b = parseFloat(material.stagesProcessesB),
                c = parseFloat(material.criticalityC),
                r = parseFloat(material.numberOfRiskForMaterial),
                resultLevelOfRisk = "Высокий";

            function isNumeric(num) {
                return (num >=0 || num < 0);
            }

            if(isNumeric(a) && isNumeric(b) && isNumeric(c) && isNumeric(r)){

                    if(r <= 4){
                       resultLevelOfRisk = "Низкий";
                    }

                    if(r > 4 && r <= 27){
                        resultLevelOfRisk = "Средний";
                    }
            }

            this.model.materials[index].levelOfRisk = resultLevelOfRisk.toString();
        };
    }
})();
