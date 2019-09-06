define(['angular', 'require'], function (angular, require) {

    'use strict';

    flowChartController.$inject = ['$scope','maDataPointTags','maPoint','$state','$stateParams'];


    function flowChartController($scope,maDataPointTags,maPoint,$state,$stateParams) {
        this.$onInit = () => {
            this.refreshSite();
        };

    this.refreshSite = () => {
        return maDataPointTags
        .buildQuery('sites')
        .query()
        .then(values => {
            this.sites = values.sort();
            //this.sites.unshift('ALL');

            if (this.sites.includes(this.site)) {
                if (this.sites.includes($stateParams.site)) {
                    this.site = $stateParams.site;
                }else if (this.sites.length) {
                    this.site = this.sites[0];
                }else{
                    this.site = 'ALL';
                }

                this.siteChanged();
                
            }
        });
            
    };

    this.siteChanged = () => {
        this.equipos = {};
        $stateParams.site = this.site;

        console.log(this.site); 
        $state.go('.', $stateParams, {location: 'replace', notify: false});
        
        this.getEquiposName();
    };

    this.getEquiposName = () => {
        let queryBuilder = maDataPointTags.buildQuery('equipo');

        if (this.site == 'ALL') {
            queryBuilder.ne('sites', null);
        } else {
            queryBuilder.eq('sites', this.site);
        }

        return queryBuilder
            .query()
            .then(values => {
                this.equipoName = values.sort();
                this.refreshEquipo   ();
            });
    };

    this.refreshEquipo = () => {

        let queryBuilder = maPoint.buildQuery();

        if (this.site == 'ALL') {
            queryBuilder.ne('tags.sites', null);
        } else {
            queryBuilder.eq('tags.sites', this.site);
        }


        return queryBuilder
            .limit(1000)
            .query()
            .then((points) => { 
                this.orderPoints(points);
            });

    };

    this.orderPoints = (points) => {

        this.equipoName.forEach( equipo => {
            
            this.equipos[equipo] = {
                'power': this.filterBySiteAndEquipo(points, 'power', equipo),
                'temp': this.filterBySiteAndEquipo(points,'temp',equipo),
                'soc': this.filterBySiteAndEquipo(points,'soc',equipo),
                'energy': this.filterBySiteAndEquipo(points,'energy',equipo)


                
                
            };

            console.log(this.equipos)

        });

    };

    this.filterBySiteAndEquipo = (points, name, equipo) => {
        return points.filter(point => {
            return point.name == name && point.tags.equipo == equipo;
        })[0];
    };


    }
    return {
        bindings: {},
        controller: flowChartController,
        templateUrl: require.toUrl('./flowChart.html'),

    };

});