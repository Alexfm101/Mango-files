define(['angular', 'require'], function (angular, require) {

    'use strict';

    siteConfigController.$inject = ['$scope'];


    function siteConfigController($scope) {
        this.$onInit = () => {
            this.config = 'site config';
        };
    }

    return {
        bindings: {},
        controller: siteConfigController,
        templateUrl: require.toUrl('./siteConfig.html')
    };

});