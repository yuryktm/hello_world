(function(){
    "use strict";
    angular
        .module("vendor.view")
        .service("CardServices", CardServices);

    CardServices.$inject = ['consts', '$http'];

    function CardServices(consts, $http){
        this.model = {};
        var model = this.model;

        this.model.organizationLegalFormVendorList = consts.organizationLegalFormVendorList;

        this.model.pageMode = { pageView: true };
        this.getPageMode = function(){
            return this.model.pageMode;
        };

        //this.addMaterial = function(){
        //
        //    if(this.model.materials.length < 50){//ограничение на количество строк
        //        var newMaterial = {
        //            materialName: "",
        //                contactProductA: "",
        //                stagesProcessesB: "",
        //                criticalityC: "",
        //                numberOfRiskForMaterial: "",
        //                levelOfRisk: "Низкий"
        //        };
        //
        //        this.model.materials.push(newMaterial);
        //    }
        //};
        //
        //this.deleteMaterial = function(index){
        //
        //    this.model.materials.splice(index, 1);
        //
        //    if(this.model.materials.length == 0){
        //        this.addMaterial();
        //    }
        //};

        this.getCard = function(){
            console.log('getCard');
            $http.get(consts.URL_GET)
                .then(function(response){
                    if(response.data){
                        model.card = response.data.card;
                    }
                },function(response){
                    console.log(response.statusText);
                }
            );
        };

        this.saveCard = function(callback){
            $http.post(consts.URL_POST, {"data": model.card})
                .then(function(response){
                    callback();
                },function(response){
                    console.log(response.statusText);
                }
            );
        };

        //this.calculate = function(index){
        //
        //    //вычисление поля "Уровень риска"
        //    var material = this.model.materials[index];
        //    var a = parseFloat(material.contactProductA),
        //        b = parseFloat(material.stagesProcessesB),
        //        c = parseFloat(material.criticalityC),
        //        r = parseFloat(material.numberOfRiskForMaterial),
        //        resultLevelOfRisk = "Высокий";
        //
        //    function isNumeric(num) {
        //        return (num >=0 || num < 0);
        //    }
        //
        //    if(isNumeric(a) && isNumeric(b) && isNumeric(c) && isNumeric(r)){
        //
        //            if(r <= 4){
        //               resultLevelOfRisk = "Низкий";
        //            }
        //
        //            if(r > 4 && r <= 27){
        //                resultLevelOfRisk = "Средний";
        //            }
        //    }
        //
        //    this.model.materials[index].levelOfRisk = resultLevelOfRisk.toString();
        //};
    }
})();
