(function(){
    "use strict";
    angular
        .module("listOfMaterials")
        .service("listOfMaterialsServices", listOfMaterialsServices);

    function listOfMaterialsServices(materialsValue, $http){
        this.model = {};
        var model = this.model;
       // this.model.materials = materialsValue.data.materials;
        this.model.verificationRestrictionsDictionary = materialsValue.data.verificationRestrictionsDictionary;

        this.addMaterial = function(){

            if(this.model.materials.length < 50){//ограничение на количество строк
                var newMaterial = {
                    materialName: "",
                        contactProductA: "1",
                        stagesProcessesB: "1",
                        criticalityC: "1",
                        numberOfRiskForMaterial: "1",
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
            $http.get('ListOfMaterialsPage/materials.json').success(function(data) {
                model.materials = data.materials;
            });

            //$http({
            //    method: 'GET',
            //    url: 'https://http5bin.org/get'
            //}).then(function successCallback(response) {
            //        console.log(response);
            //}, function errorCallback(response) {
            //    console.log(response);
            //});
        };

        this.calculate = function(index){

            //вычисление поля "Число риска по материалу"
            var material = this.model.materials[index];
            var a = parseFloat(material.contactProductA),
                b = parseFloat(material.stagesProcessesB),
                c = parseFloat(material.criticalityC),
                resultNumberOfRiskForMaterial = "нет",
                resultLevelOfRisk = "Высокий";

            if(!isNaN(a) && !isNaN(b) && !isNaN(c)){
                resultNumberOfRiskForMaterial = a * b * c;

                //вычисление поля "Уровень риска"
                if(resultNumberOfRiskForMaterial <= 4){
                    resultLevelOfRisk = "Низкий";
                }

                if(resultNumberOfRiskForMaterial > 4 && resultNumberOfRiskForMaterial <= 27){
                    resultLevelOfRisk = "Средний";
                }

                if(resultNumberOfRiskForMaterial > 27){
                    resultLevelOfRisk = "Высокий";
                }
            }

            this.model.materials[index].numberOfRiskForMaterial = resultNumberOfRiskForMaterial.toString();
            this.model.materials[index].levelOfRisk = resultLevelOfRisk.toString();
        };
    }
})();
