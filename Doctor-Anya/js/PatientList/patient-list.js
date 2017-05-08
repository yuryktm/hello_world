(function(){
    "use strict"

    angular.module("doctorAnyaApp")
        .filter('filterAge', filterAge)
        .controller("PatientListCtrl", patientListCtrl);

    patientListCtrl.$inject = ["$scope"];

    function patientListCtrl($scope){
        var vm = this;
        //
        // 1.	ФИО
        // 2.	Возраст (+ визуальная отметка взрослый/ребенок)
        // 3.	Семья (+можно сделать ссылку о родстве нескольких пациентов, например, мать-ребенок, муж-жена)
        // 4.	Профессия
        // 5.	Хобби, увлечения


        vm.patientList = [
            {
                name : 'Иван',
                lastName : 'Иванов',
                patronymic : 'Иванович',
                age: 'adult', //adult/child,
                profession: 'повар',
                hobby: 'бег, грибы, пицца',
                family: 'wife, child' //mother, child, husband, wife
            },
            {
                name : 'Петр',
                lastName : 'Петров',
                patronymic : 'Иванович',
                age: 'child', //adult/child,
                profession: 'педиатор',
                hobby: 'машины, охота',
                family: 'wife' //mother, child, husband, wife
            },
            {
                name : 'Оля',
                lastName : '',
                patronymic : '',
                age: 'adult', //adult/child,
                profession: 'школьник',
                hobby: 'кино, танцы',
                family: 'mother' //mother, child, husband, wife
            }
        ];


    };

    //фильтр для поля возраст
    function filterAge() {
        return function(x){
            var result = '';

            switch(x){
                case 'adult':
                    result = 'взрослый';
                    break;
                case 'child':
                    result = 'ребенок';
                    break;
            }

           return result;
        }
    }

})();
