(function(){
    "use strict";
    angular
        .module("app")
        .directive("dirTable", dirTable); //dirMyhh (js) = dir-myhh(html)
    //��� ����������� ����� ����������� � html

    function dirTable(){
        //���������� ���������������� ������
        return {
            restrict: "A",         //A -��������� ����� ������������ ��� �������
            templateUrl:"feature/table.html"
        }
    }

})();

