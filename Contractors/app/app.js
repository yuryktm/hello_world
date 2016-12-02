(function(){

    $('.contractorContainer').html('<div ng-app="contractor.edit"><div tab-dir></div></div>');

    angular.module("contractor.edit",
        [
            'ui.bootstrap',
            'ngResource'
        ]);
})();
