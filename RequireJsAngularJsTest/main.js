require.config({
    paths: {
        'angular': '../libs/angular/angular'
    },

    shim: {
        'angular': {
            exports: 'angular'
        }
    }
});
///////////////////////////////
//define([
//    'angular',
//    'app',
//    'routes'
//], function (ng) {
//    'use strict';
//
//    //require(['domReady!'], function (document) {
//    //    ng.bootstrap(document, ['app']);
//    //});
//
//
//    ng.element(document).ready(function() {
//        ng.bootstrap(document, ['app']);
//    });
//
//});


requirejs( [
        'angular',
        'app',
    ],function (angular) {
        //$(document).ready(function () {
        //    angular.bootstrap(document, ['app']);
        //});
    }
);
