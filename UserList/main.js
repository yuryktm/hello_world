requirejs.config({
    //baseUrl: "js",

    //<script data-main="main" src="bower_components/requirejs/require.js"></script>
    //<script src="bower_components/jquery/dist/jquery.js"></script>
    //<script src="bower_components/underscore/underscore.js"></script>
    //<script src="bower_components/backbone/backbone.js"></script>

    paths: {
        jquery: 'bower_components/jquery/dist/jquery',
        backbone: 'bower_components/backbone/backbone',
        underscore: 'bower_components/underscore/underscore',
        "text" : "bower_components/requirejs-text/text"
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

require(
    //["./js/app.js"],
    ["./js/list-group.js"],
    function(App){

        //$(document).ready(function() {
        //    var myApp = new App();
        //    myApp.init();
        //});

        console.log('app loaded ...');
    });
