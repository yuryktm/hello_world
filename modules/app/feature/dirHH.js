(function(){
    "use strict";
    angular
        .module("app")
        .directive("dirMyhh", hh); //dirMyhh (js) = dir-myhh(html)
        //��� ����������� ����� ����������� � html

    function hh($){
        //������������ ���������������� ������
        return {

            //1 ����� ���������� � ������ �������� ������������ ���������, �� �� ������
            //2 jqury/jqury lite o����� | ������� � �������� ����������� ���������
            //3 �������� ��������
            link: function(scope, element, attrs){
                console.log(element);
                console.log(attrs);
                if(scope.day === attrs["dirMyhh"])
                    element.css("color","red");

                }
        }


    }

})();

