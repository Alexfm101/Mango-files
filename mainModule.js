define([
    'angular', 
    'require',
    './Components/helloWorld.js',
    './Components/siteOverview.js',
    './Components/siteDetails.js',
    './Components/siteConfig.js',
    './Components/flowChart.js'
], 
function(angular, require, helloWorld,siteOverview,siteDetails,siteConfig,flowChart) {
'use strict';
var mainModule = angular.module('userModule', ['maUiApp']);
    mainModule.component('helloWorld', helloWorld);
    mainModule.component('siteOverview', siteOverview);
    mainModule.component('siteDetails', siteDetails);
    mainModule.component('siteConfig', siteConfig);
    mainModule.component('flowChart', flowChart);
    mainModule.config(['maUiMenuProvider', function(maUiMenuProvider) {
        maUiMenuProvider.registerMenuItems([
            {
                name: 'ui.SolarSystem',
                url: '/SolarSystem',
                menuText: 'Solar System',
                menuIcon: 'accessibility_new',
                abstract: true,
                menuHidden: false,
                weight: 996,
            },

            // {
            //     name: 'ui.SolarSystem.helloWorld',
            //     url: '/helloWorld',
            //     template: '<hello-world></hello-world>',
            //     menuIcon: 'map',
            //     menuText: 'hello world',
            //     weight: 997,
            //     params: {
            //         noPadding: false,
            //         hideFooter: false,
            //     },
            // },

            {
                name: 'ui.SolarSystem.SitesOverview',
                url: '/SitesOverview?site=',
                template: '<site-overview></site-overview>',
                menuIcon: 'map',
                menuText: 'Sites Overview',
                weight: 997,
                params: {
                    noPadding: false,
                    hideFooter: false,
                },
                
                
            },

            {
                name: 'ui.SolarSystem.FlowChart',
                url: '/FlowChart',
                template: '<flow-chart></flow-chart>',
                menuIcon: 'pie_chart',
                menuText: 'Flow Chart',
                weight: 997,
                params: {
                    noPadding: false,
                    hideFooter: false,
                },
                
                
            },

            {
                name: 'ui.SolarSystem.SiteDetails',
                url: '/SiteDetails',
                template: '<site-details></site-details>',
                menuIcon: 'insert_chart_outlined',
                menuText: 'Site Details',
                weight: 997,
                params: {
                    noPadding: false,
                    hideFooter: false,
                },
                
                
            },

            
            // {
            //     name: 'ui.SolarSystem.SitesConfiguration',
            //     url: '/SitesConfiguration',
            //     template: '<site-config></site-config>',
            //     menuIcon: 'storage',
            //     menuText: 'Sites Configuration',
            //     weight: 997,
            //     params: {
            //         noPadding: false,
            //         hideFooter: false,
            //     },
                
                
            // },

        ]);
    }]);
    return mainModule;
});