//numberGeneratorsApp

(function(){
    "use strict"

    angular.module("number-generators.view", ["ngTable", "ngResource"])
        .controller("NumberGeneratorsCtrl", numberGeneratorsCtrl);

    numberGeneratorsCtrl.$inject = ["$scope", "NgTableParams", "ngTableDefaults","NumberGeneratorsFactory"];

    function numberGeneratorsCtrl($scope, NgTableParams, ngTableDefaults,NumberGeneratorsFactory){
        var vm = this;

        //
        ngTableDefaults.params.count = 5;
        ngTableDefaults.settings.counts = [];

        // NumberGeneratorsFactory.getListNumberGenerators().$promise.then(function (r) {
        //     vm.tableParams = new NgTableParams({}, { dataset: vm.userList});
        // });

        var str = '{"status":"OK","message":null,"result":[{"cyclic":"false","nodeRef":"workspace://SpacesStore/b31d542a-67e4-468e-8e13-f5cb7250a7c6","code":"2015_INDOC_BIOCAD","description":"2015 Входящий документ Биокад","mask":"Б-%1d-2015 ","currentValue":2299},{"nodeRef":"workspace://SpacesStore/0a12e480-a61f-44d5-ae16-1857fc5ca7fb","code":"2015_INDOC_BIOCAD_FARM","description":"2015 Входящий документ Биокад-Фарм","mask":"БФ-%1d-2015","currentValue":2},{"nodeRef":"workspace://SpacesStore/a6841b12-b60f-42f0-8097-76b4469cd477","code":"2015_INDOC_AI_MAB","description":"2015 Входящий документ Ай-Маб","mask":"АМ-%1d-2015  %ty%yt","currentValue":3},{"nodeRef":"workspace://SpacesStore/f3c90124-f4e4-490d-89e9-d75ffec2a666","code":"2015_OUTDOC_BIOCAD","description":"2015 Исходящий документ Биокад","mask":"Б-%1d-2015","currentValue":40},{"nodeRef":"workspace://SpacesStore/a0867618-34a7-4bc2-b0a2-909cd15c540b","code":"2015_OUTDOC_BIOCAD_FARM","description":"2015 Исходящий документ Биокад-Фарм","mask":"БФ-%1d-2015","currentValue":8},{"nodeRef":"workspace://SpacesStore/1cb337c6-67a1-46a4-a8fe-7bf97b3032e1","code":"2015_OUTDOC_AI_MAB","description":"2015 Исходящий документ Ай-Маб","mask":"АМ-%1d-2015","currentValue":0},{"nodeRef":"workspace://SpacesStore/3b10bc7e-4f0f-4b47-b2e2-54b8bbb08b12","code":"default","description":"default","mask":"%09d","currentValue":389},{"nodeRef":"workspace://SpacesStore/2a1cd4b6-ccd4-4674-b086-8076631a4afb","code":"REGULATIONS","description":"Регламентирующий документ","mask":"%1d","currentValue":5},{"nodeRef":"workspace://SpacesStore/0bdb7b1a-e465-4ba7-b050-49493802a5be","code":"2015_CONTR_AI_MAB","description":"2015 Договоры Ай-Маб","mask":"АМ-%1d-2015","currentValue":0},{"nodeRef":"workspace://SpacesStore/b97704b6-7f35-4906-b3d1-e7abe23502f5","code":"2015_CONTR_BIOCAD","description":"2015 Договоры Биокад","mask":"Б-%1d-2015","currentValue":43},{"nodeRef":"workspace://SpacesStore/9a58e218-309d-4e1e-86ed-cccd18c51d3e","code":"2015_CONTR_BIOCAD_FARM","description":"2015 Договоры Биокад-Фарм","mask":"БФ-%1d-2015","currentValue":0},{"nodeRef":"workspace://SpacesStore/b739474c-10bb-4dee-acdd-0f75162766b8","code":"jjjj","description":"jjj","mask":"<введите название>%05d%ty%yt","currentValue":1}]}';
        var rez = JSON.parse(str);
        vm.userList = rez.result;
        angular.forEach(vm.userList, function (x) {x.cyclic =  false;});

        var originalData = angular.copy(vm.userList);
        vm.tableParams = new NgTableParams({}, {
            filterDelay: 0,
            dataset: vm.userList
        });

        vm.btnAdd = btnAdd;
        vm.btnSearch = btnSearch;
        vm.btnDel = btnDel;
        vm.btnCancel = btnCancel;
        vm.searchField = 'текст';

        function btnSearch(){    };

        function btnCancel(row, rowForm){
            var originalRow = resetRow(row, rowForm);
            angular.extend(row, originalRow);

            vm.tableParams.reload();
        }

        function resetRow(row, rowForm){
            row.isEditing = false;
            rowForm.$setPristine();
            vm.tableTracker.untrack(row);
            return _.find(originalData, function(r){
                return r.nodeRef === row.nodeRef;
            });
        }

        function btnAdd(){

            var newItem = {
                    code: '',
                    mask: '<введите название>-%05d',
                    description: '',
                    currentValue: 0,
                    nodeRef: null,
                    cyclic:false
                };

            vm.tableParams.settings().dataset.push(newItem);
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
/*********************************************************************************************************************/
//ng-table

/**********
 The following directives are necessary in order to track dirty state and validity of the rows
 in the table as the user pages within the grid
 ------------------------
 */

(function() {
    angular.module("number-generators.view").directive("demoTrackedTable", demoTrackedTable);

    demoTrackedTable.$inject = [];

    function demoTrackedTable() {
        return {
            restrict: "A",
            priority: -1,
            require: "ngForm",
            controller: demoTrackedTableController
        };
    }

    demoTrackedTableController.$inject = ["$scope", "$parse", "$attrs", "$element"];

    function demoTrackedTableController($scope, $parse, $attrs, $element) {
        var self = this;
        var tableForm = $element.controller("form");
        var dirtyCellsByRow = [];
        var invalidCellsByRow = [];

        init();

        ////////

        function init() {
            var setter = $parse($attrs.demoTrackedTable).assign;
            setter($scope, self);
            $scope.$on("$destroy", function() {
                setter(null);
            });

            self.reset = reset;
            self.isCellDirty = isCellDirty;
            self.setCellDirty = setCellDirty;
            self.setCellInvalid = setCellInvalid;
            self.untrack = untrack;
        }

        function getCellsForRow(row, cellsByRow) {
            return _.find(cellsByRow, function(entry) {
                return entry.row === row;
            })
        }

        function isCellDirty(row, cell) {
            var rowCells = getCellsForRow(row, dirtyCellsByRow);
            return rowCells && rowCells.cells.indexOf(cell) !== -1;
        }

        function reset() {
            dirtyCellsByRow = [];
            invalidCellsByRow = [];
            setInvalid(false);
        }

        function setCellDirty(row, cell, isDirty) {
            setCellStatus(row, cell, isDirty, dirtyCellsByRow);
        }

        function setCellInvalid(row, cell, isInvalid) {
            setCellStatus(row, cell, isInvalid, invalidCellsByRow);
            setInvalid(invalidCellsByRow.length > 0);
        }

        function setCellStatus(row, cell, value, cellsByRow) {
            var rowCells = getCellsForRow(row, cellsByRow);
            if (!rowCells && !value) {
                return;
            }

            if (value) {
                if (!rowCells) {
                    rowCells = {
                        row: row,
                        cells: []
                    };
                    cellsByRow.push(rowCells);
                }
                if (rowCells.cells.indexOf(cell) === -1) {
                    rowCells.cells.push(cell);
                }
            } else {
                _.remove(rowCells.cells, function(item) {
                    return cell === item;
                });
                if (rowCells.cells.length === 0) {
                    _.remove(cellsByRow, function(item) {
                        return rowCells === item;
                    });
                }
            }
        }

        function setInvalid(isInvalid) {
            self.$invalid = isInvalid;
            self.$valid = !isInvalid;
        }

        function untrack(row) {
            _.remove(invalidCellsByRow, function(item) {
                return item.row === row;
            });
            _.remove(dirtyCellsByRow, function(item) {
                return item.row === row;
            });
            setInvalid(invalidCellsByRow.length > 0);
        }
    }
})();

(function() {
    angular.module("number-generators.view").directive("demoTrackedTableRow", demoTrackedTableRow);

    demoTrackedTableRow.$inject = [];

    function demoTrackedTableRow() {
        return {
            restrict: "A",
            priority: -1,
            require: ["^demoTrackedTable", "ngForm"],
            controller: demoTrackedTableRowController
        };
    }

    demoTrackedTableRowController.$inject = ["$attrs", "$element", "$parse", "$scope"];

    function demoTrackedTableRowController($attrs, $element, $parse, $scope) {
        var self = this;
        var row = $parse($attrs.demoTrackedTableRow)($scope);
        var rowFormCtrl = $element.controller("form");
        var trackedTableCtrl = $element.controller("demoTrackedTable");

        self.isCellDirty = isCellDirty;
        self.setCellDirty = setCellDirty;
        self.setCellInvalid = setCellInvalid;

        function isCellDirty(cell) {
            return trackedTableCtrl.isCellDirty(row, cell);
        }

        function setCellDirty(cell, isDirty) {
            trackedTableCtrl.setCellDirty(row, cell, isDirty)
        }

        function setCellInvalid(cell, isInvalid) {
            trackedTableCtrl.setCellInvalid(row, cell, isInvalid)
        }
    }
})();

(function() {
    angular.module("number-generators.view").directive("demoTrackedTableCell", demoTrackedTableCell);

    demoTrackedTableCell.$inject = [];

    function demoTrackedTableCell() {
        return {
            restrict: "A",
            priority: -1,
            scope: true,
            require: ["^demoTrackedTableRow", "ngForm"],
            controller: demoTrackedTableCellController
        };
    }

    demoTrackedTableCellController.$inject = ["$attrs", "$element", "$scope"];

    function demoTrackedTableCellController($attrs, $element, $scope) {
        var self = this;
        var cellFormCtrl = $element.controller("form");
        var cellName = cellFormCtrl.$name;
        var trackedTableRowCtrl = $element.controller("demoTrackedTableRow");

        if (trackedTableRowCtrl.isCellDirty(cellName)) {
            cellFormCtrl.$setDirty();
        } else {
            cellFormCtrl.$setPristine();
        }
        // note: we don't have to force setting validaty as angular will run validations
        // when we page back to a row that contains invalid data

        $scope.$watch(function() {
            return cellFormCtrl.$dirty;
        }, function(newValue, oldValue) {
            if (newValue === oldValue) return;

            trackedTableRowCtrl.setCellDirty(cellName, newValue);
        });

        $scope.$watch(function() {
            return cellFormCtrl.$invalid;
        }, function(newValue, oldValue) {
            if (newValue === oldValue) return;

            trackedTableRowCtrl.setCellInvalid(cellName, newValue);
        });
    }
})();