// number-generators.service
//NumberGenerators
(function () {
    'use strict';

    // function $combineProxy() {
    //     return Alfresco.util.combinePaths.apply(null, _.union([Alfresco.constants.PROXY_URI], arguments));
    // }

    angular
        .module('number-generators.view')
        .factory('NumberGeneratorsFactory', NumberGeneratorsFactory);

    NumberGeneratorsFactory.$inject = ['$resource'];

    function NumberGeneratorsFactory($resource){

        return $resource('', {}, {

            getListNumberGenerators: {method: 'GET', url: '/proxy/alfresco/aed/sequence/list?filter=&'}
        })
    }
})();




