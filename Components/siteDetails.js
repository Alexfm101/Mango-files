define(['angular', 'require'], function (angular, require) {

    'use strict';

    siteDetailsController.$inject = ['$scope'];


    function siteDetailsController($scope) {
        this.$onInit = () => {
            this.detail = 'site details';
        };
    }

    return {
        bindings: {},
        controller: siteDetailsController,
        templateUrl: require.toUrl('./siteDetails.html')
    };

});