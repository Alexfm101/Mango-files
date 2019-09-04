define(['angular', 'require'], function (angular, require) {

    'use strict';

    siteDetailsController.$inject = ['$scope','maDataPointTags','maPoint'];


    function siteDetailsController($scope,maDataPointTags,maPoint) {
        this.$onInit = () => {
            this.getSites();
        };

        this.getSites = () => {
            return maDataPointTags
            .buildQuery('sites')
            .query()
            .then(values => {   
                this.sites = values.sort();
            });
        };
    }

    return {
        bindings: {},
        controller: siteDetailsController,
        templateUrl: require.toUrl('./siteDetails.html')
    };

});