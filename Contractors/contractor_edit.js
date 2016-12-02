//Основной бизнес:
$scope.clickShowBasicBusiness = function(){

    Evelopers.forms.search.metaguideMain(
        /* textInput = */ '',
        /* nodeRefInput = */ '',
        /* scope = */ this,
        /* params = */ {showBasicBusinessOnly: true}
    );
};

//Адреса
$scope.clickShowAddress = function() {
    Evelopers.forms.search.addressSelectCardMain(
        /* fullAddressObj = */ {}, ///o.currentContractor[fldObj.addressType] || {},
        /* isResident = */ false, //(w.el_resident.val() === 'true'),
        /* onSelectCallback = */ function (a) {

            //смотри сайв, там запись в строку итд
            //saveUpdateAddress(a, fldObj.addressType);
        },
        /* scope = */ this,
        /* preLoader = */ null
    );
};

//Список оповещаемых лиц:
$scope.clickShowEmployee = function(){

    var val = '<input type="text" value="Абдулина Юлия Александровна"/>';

    Evelopers.forms.search.employeeMain(val, '', this, true, '&checkAccount=false', null);

    YAHOO.Bubbling.on('employeeSelected', function(layer, args) {
        var isFound = false, emp, lastName, firstName, middleName, fullName;
        var multipleSelect = false;

        var textInput;
        var nodeRefInput;

        if (multipleSelect) {
            var empArr = args[1],
                fullNames = [],
                nodeRefs = [];

            for (var ind = empArr.length - 1; ind >= 0; ind--) {
                var item = empArr[ind].employee;
                fullNames.push(item.fullName || item.name);
                nodeRefs.push(item.nodeRef);
            }

            textInput = fullNames.join(', ');
            nodeRefInput = nodeRefs.join(', ');
        }
        else {
            isFound = false;
            emp = args[1].employee;
            if (emp.fullName) {
                fullName = emp.fullName;
            }
            else {
                lastName = emp.lastName ? emp.lastName : '';
                firstName = emp.firstName ? emp.firstName : '';
                middleName = emp.middleName ? emp.middleName : '';
                fullName = lastName ? lastName + ' ' + firstName + ' ' + middleName : firstName + ' ' + middleName;
            }

            if (!isFound) {
                $(textInput).val(fullName).trigger('change');
                $(nodeRefInput).val(emp.nodeRef).trigger('change');

                textInput = fullName;
                nodeRefInput = emp.nodeRef;
            }

            // $(idInput).val(emp.externalId).trigger('change');
        }

        $scope.model.text1 = textInput;
        $scope.model.text2 = nodeRefInput;

        //Alfresco.globalDialogues.employeeSearchDialog.hide();
        //YAHOO.Bubbling.fire('employeeSelectedParent', true);
    });
};

/************************************************************************************************************************************************/

//Используется:
$scope.clickShowusedBy = function() {

    var ALL_USED_BY_VALUE = 'ALL';
    var  usedBy_nodeRef = '';

    var $textInput = $('<input type="text"/>')
    var $nodeRefInput = $('<input type="text"/>');
    $textInput.change(function() {
        $scope.model.text1 = this.value;
    });
    $nodeRefInput.change(function() {
        $scope.model.text2 = this.value;
    });

    Evelopers.forms.search.contractorMain($textInput, $nodeRefInput, {
        'multipleSelect': false,
        'showOnlyLegalEntity': true,
        'exclude': '',//o.currentContractor.nodeRef,
        'usedByAll': true,//o.allUsedByEdit,
        'usedByAllChecked': (usedBy_nodeRef === ALL_USED_BY_VALUE)
    }, this);

};

/************************************************************************************************************************************************/
//Головное юр. лицо:
$scope.clickShowHolding = function(){

    Evelopers.forms.search.contractorMain('','',{
        'multipleSelect': false,
        'holding': true,
        'nodeRef': ''
    }, this);

    YAHOO.Bubbling.on('contractorSelected', function(layer, args) {

        var answerArr = args[1],
            fullNames = [],
            name,
            nodeRefs = [];

        if (answerArr.length === 1 && answerArr[0] === 'ALL') {
            fullNames = [scope.msg('label.all')];
            nodeRefs = ['ALL'];
        }
        else {
            for (var ind = answerArr.length - 1; ind >= 0; ind--) {
                var item = answerArr[ind].contractor;
                name = Alfresco.util.decodeHTML((item.name).toLowerCase());
                fullNames.push(name.toUpperCase());
                nodeRefs.push(item.nodeRef);
            }
        }

        var textInput = fullNames.join(', ');
        var nodeRefInput = nodeRefs.join(', ');

        $scope.model.text1 = textInput;
        $scope.model.text2 = nodeRefInput;

        //contractorSelectedEvent.fire(answerArr);
        // Alfresco.globalDialogues.contractorDialog.hide();
    });

};
