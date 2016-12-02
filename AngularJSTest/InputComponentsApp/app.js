(function(){
    "use strict"

    angular.module("inputComponentsApp", [])
        .value(getValue())
        .controller("MainCtrl", mainCtrl);

        mainCtrl.$inject = ["$scope", "data"];

        function mainCtrl($scope, data){
            var vm = this;
            vm.title = 'title1234';
            vm.data = data;

        };

        function getValue() {
            return {

                'data':{
                                "customPropertiesJson":
                                    {
                                        "customProperty1":[
                                                {
                                                    "displayValue":"ывлоапырлова",
                                                    "value":"ывлоапырлова"
                                                }
                                            ],
                                        "customProperty2":[
                                            {
                                                "displayValue":"Абдулина Юлия Александровна",
                                                "fullValue":"Абдулина Юлия Александровна",
                                                "value":"3572cc61-b9b2-4826-8d8a-cfa09536af36"
                                            }
                                            ]
                                    },

                                "mandatoryFields":
                                    [
                                        {
                                            "propertyId":"customProperty1",
                                            "title":"текст 1",
                                            "type":"text",
                                            "description":"",
                                            "isUsedInWorkflowRules":false,
                                            "isMandatory":false,
                                            "autoCompletionQName":"",
                                            "access":null,"regex":"","selectableValues":[],"selectableTree":null,"defaultValue":null,
                                            "defaultValueJson":null,"selectableValuesJson":[],"selectableTreeJson":null,"multiple":false,"publish":null,"maxLength":256,"maxLines":1,"level":0,
                                            "restriction":null,"restrictionDetails":null,"mru":false,"linkedFieldId":null,"isAdditional":false,"activityCondition":{"fieldId":"","condition":""}},
                                        {
                                            "propertyId":"customProperty2",
                                            "title":"сотрудник 1",
                                            "type":"employee",
                                            "description":"","isUsedInWorkflowRules":false,
                                            "isMandatory":false,"autoCompletionQName":"","access":null,"regex":"","selectableValues":[],"selectableTree":null,"defaultValue":"","defaultValueJson":null,
                                            "selectableValuesJson":[],"selectableTreeJson":null,"multiple":false,"publish":null,"maxLength":256,"maxLines":1,"level":0,"restriction":null,
                                            "restrictionDetails":null,"mru":false,"linkedFieldId":"","isAdditional":false,"activityCondition":{"fieldId":"","condition":""}}]

                            }
                };

        }


})();

