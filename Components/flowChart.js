define(['angular', 'require'], function (angular, require) {

    'use strict';

    flowChartController.$inject = ['$scope'];


    function flowChartController($scope) {
        this.$onInit = () => {
            this.flowchart = 'flow chart';
        };
    }

    return {
        bindings: {},
        controller: flowChartController,
        templateUrl: require.toUrl('./flowChart.html'),

    };

});