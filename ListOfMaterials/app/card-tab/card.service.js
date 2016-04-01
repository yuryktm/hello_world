(function(){
    "use strict";
    angular
        .module("vendor.view")
        .service("CardServices", CardServices);

    CardServices.$inject = ['consts', '$http'];

    function CardServices(consts, $http){
        this.model = {};
        var model = this.model;

        this.model.organizationLegalFormVendorList = consts.ORGANIZATION_LEGAL_FORM_VENDOR_LIST;

        this.model.pageMode = { pageView: true };
        this.getPageMode = function(){
            return this.model.pageMode;
        };

        //Файлы вложения аудита
        /*************************************************************************************************************/
        this.addAudit = function(){
            if(this.model.card.auditFiles.length < 50){//ограничение на количество строк
                var newAudit = {
                    "files": [{"fileName": ""}],
                    "auditDate": ""
                };

                this.model.card.auditFiles.push(newAudit);
            }
        };

        this.deleteAudit =  function(index){

            this.model.card.auditFiles.splice(index, 1);

            if(this.model.card.auditFiles.length == 0){
                this.addAudit(index);
            }
        };

        this.addAuditFile = function(index){
            if(this.model.card.auditFiles[index].files.length < 10){//ограничение на количество файлов
                var newAuditFile = {
                    "fileName": "test234.doc"
                };

                this.model.card.auditFiles[index].files.push(newAuditFile);
            }
        };

        this.deleteAuditFile =  function(index, fileIndex){

            this.model.card.auditFiles[index].files.splice(fileIndex, 1);

            if(this.model.card.auditFiles[index].files.length == 0){
                this.addAuditFile(index);
            }
        };

        //Анкета поставщика
        /*************************************************************************************************************/
        this.addVendorWorksheet = function(){
            if(this.model.card.vendorWorksheets.length < 50){//ограничение на количество строк
                var newVendorWorksheet = {
                    "worksheets": [],
                    "sentDate": "",
                    "receivedDate": ""
                };

                this.model.card.vendorWorksheets.push(newVendorWorksheet);
            }
        };

        this.deleteVendorWorksheet =  function(index){

            this.model.card.vendorWorksheets.splice(index, 1);

            if(this.model.card.vendorWorksheets.length == 0){
                this.addVendorWorksheet();
            }
        };

        /*************************************************************************************************************/
        this.getCard = function(){
            console.log('getCard');
            $http.get(consts.CARD_TAB_URL_GET)
                .then(function(response){
                    if(response.data){
                        model.card = response.data;
                    }
                },function(response){
                    console.log(response.statusText);
                }
            );
        };

        this.saveCard = function(callback){
            $http.post(consts.CARD_TAB_URL_POST, {"data": model.card})
                .then(function(response){
                    callback();
                },function(response){
                    console.log(response.statusText);
                }
            );
        };
    }
})();
