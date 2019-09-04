define(['angular', 'require'], function (angular, require) {

    'use strict';

    flowChartController.$inject = ['$scope','maDataPointTags','maPoint','$state','$stateParams'];


    function flowChartController($scope,maDataPointTags,maPoint,$stateParams,$state) {
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
        controller: flowChartController,
        templateUrl: require.toUrl('./flowChart.html'),

    };

});