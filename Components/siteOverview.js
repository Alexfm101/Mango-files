define(['angular', 'require',], function (angular, require) {

    'use strict';

    siteOverviewController.$inject = ['$scope','maDataPointTags', 'maPoint'];

    function siteOverviewController($scope,maDataPointTags,maPoint) 
    {
        this.$onInit = () => {
            this.getSites();

        };

        this.getSites = () =>  {
            return maDataPointTags
            .buildQuery('sites')
            .query()
            .then( values => {
                this.sites = values.sort();

                this.getEquipos();
            });  
        };

        this.getEquipos = () => {
            this.status = {};
            let queryBuilder = maDataPointTags.buildQuery('equipo');
            return queryBuilder
            .query()
            .then(values => {
                this.equipoName = values.sort();
                this.getPoints();
            });
        
  
        };

        this.getPoints = () => {
            let queryBuilder = maPoint.buildQuery();
           
            return queryBuilder
            .limit(1000)
            .query()
            .then(points => {
                this.orderPoints(points);
            });
        };

        this.orderPoints = (points) => {
            this.sitios = {};
            this.sites.forEach(sitio => {
                this.sitios[sitio] = {
                    'battery': this.pointFilter(points,'status','battery'),
                    'solarPanel': this.pointFilter(points,'status','solarPanel') ,
                    'costumer': this.pointFilter(points,'status','costumer'),
                    
                }
            });
            console.log(this.sitios)
        };
        
        this.pointFilter = (points,name,equipo) => {
        
            return points.filter(point => {
                return point.name == name && point.tags.equipo == equipo;
            })[0];
        };

        
        // this.pointFilterSitio = (points,name) => {};

        // this.equipoName.forEach( equipo => {
        //     this.status[equipo] = {
        //         'status': this.pointFilter(points,'status',equipo),
        //     };
        // });




}

    return {
        bindings: {},
        controller:siteOverviewController,
        templateUrl: require.toUrl('./siteOverview.html')
    };

});