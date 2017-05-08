//numberGeneratorsApp

(function(){
    "use strict"

    angular.module("number-generators.view", ["ngTable", "ngResource"])
        .controller("NumberGeneratorsCtrl", numberGeneratorsCtrl);

    numberGeneratorsCtrl.$inject = ["$scope", "NgTableParams", "ngTableDefaults", "NumberGeneratorsFactory"];

    function numberGeneratorsCtrl($scope, NgTableParams, ngTableDefaults, NumberGeneratorsFactory){
        var vm = this;

        ngTableDefaults.params.count = 5;
        ngTableDefaults.settings.counts = [];

        // NumberGeneratorsFactory.getListNumberGenerators().$promise.then(function (r) {
        //     vm.tableParams = new NgTableParams({}, { dataset: vm.userList});
        // });

        var str = '{"status":"OK","message":null,"result":[{"cyclic":"false","nodeRef":"workspace://SpacesStore/b31d542a-67e4-468e-8e13-f5cb7250a7c6","code":"2015_INDOC_BIOCAD","description":"2015 Входящий документ Биокад","mask":"Б-%1d-2015 ","currentValue":2299},{"nodeRef":"workspace://SpacesStore/0a12e480-a61f-44d5-ae16-1857fc5ca7fb","code":"2015_INDOC_BIOCAD_FARM","description":"2015 Входящий документ Биокад-Фарм","mask":"БФ-%1d-2015","currentValue":2},{"nodeRef":"workspace://SpacesStore/a6841b12-b60f-42f0-8097-76b4469cd477","code":"2015_INDOC_AI_MAB","description":"2015 Входящий документ Ай-Маб","mask":"АМ-%1d-2015  %ty%yt","currentValue":3},{"nodeRef":"workspace://SpacesStore/f3c90124-f4e4-490d-89e9-d75ffec2a666","code":"2015_OUTDOC_BIOCAD","description":"2015 Исходящий документ Биокад","mask":"Б-%1d-2015","currentValue":40},{"nodeRef":"workspace://SpacesStore/a0867618-34a7-4bc2-b0a2-909cd15c540b","code":"2015_OUTDOC_BIOCAD_FARM","description":"2015 Исходящий документ Биокад-Фарм","mask":"БФ-%1d-2015","currentValue":8},{"nodeRef":"workspace://SpacesStore/1cb337c6-67a1-46a4-a8fe-7bf97b3032e1","code":"2015_OUTDOC_AI_MAB","description":"2015 Исходящий документ Ай-Маб","mask":"АМ-%1d-2015","currentValue":0},{"nodeRef":"workspace://SpacesStore/3b10bc7e-4f0f-4b47-b2e2-54b8bbb08b12","code":"default","description":"default","mask":"%09d","currentValue":389},{"nodeRef":"workspace://SpacesStore/2a1cd4b6-ccd4-4674-b086-8076631a4afb","code":"REGULATIONS","description":"Регламентирующий документ","mask":"%1d","currentValue":5},{"nodeRef":"workspace://SpacesStore/0bdb7b1a-e465-4ba7-b050-49493802a5be","code":"2015_CONTR_AI_MAB","description":"2015 Договоры Ай-Маб","mask":"АМ-%1d-2015","currentValue":0},{"nodeRef":"workspace://SpacesStore/b97704b6-7f35-4906-b3d1-e7abe23502f5","code":"2015_CONTR_BIOCAD","description":"2015 Договоры Биокад","mask":"Б-%1d-2015","currentValue":43},{"nodeRef":"workspace://SpacesStore/9a58e218-309d-4e1e-86ed-cccd18c51d3e","code":"2015_CONTR_BIOCAD_FARM","description":"2015 Договоры Биокад-Фарм","mask":"БФ-%1d-2015","currentValue":0},{"nodeRef":"workspace://SpacesStore/b739474c-10bb-4dee-acdd-0f75162766b8","code":"jjjj","description":"jjj","mask":"<введите название>%05d%ty%yt","currentValue":1}]}';
        vm.userList = JSON.parse(str).result;
        angular.forEach(vm.userList, function (x) {x.cyclic =  false;});

        vm.tableParams = new NgTableParams({}, {
            filterDelay: 0,
            dataset: vm.userList
        });

        vm.btnAdd = btnAdd;
        vm.btnSearch = btnSearch;
        vm.btnDel = btnDel;
        vm.btnSave = btnSave;
        vm.editRow = editRow;

        vm.searchField = 'текст';

        function btnSearch(){    };

        function editRow(row) {
            if(row.isEditing){ return; }
            if(!vm.tableParams.listEditRow){ vm.tableParams.listEditRow = []; }

            vm.tableParams.listEditRow.push(angular.copy(row));
            row.isEditing = true;
        };

        function btnSave(row){

        };

        function btnAdd(){
            var newItem = {
                code: '',
                mask: '<введите название>-%05d',
                description: '',
                currentValue: 0,
                nodeRef: null,
                cyclic:false,
                isEditing: true
            };

            vm.tableParams.settings().dataset.unshift(newItem);
            vm.tableParams.page(1);
            vm.tableParams.reload();
        };

        function btnDel(row){
            _.remove(vm.tableParams.settings().dataset, function(item) {
                return row === item;
            });

            vm.tableParams.reload().then(function(data) {
                if (data.length === 0 && vm.tableParams.total() > 0) {
                    vm.tableParams.page(vm.tableParams.page() - 1);
                    vm.tableParams.reload();
                }
            });
        };

    };

})();
