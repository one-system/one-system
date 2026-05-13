import { Component } from '@angular/core';

import { AreaBlades } from '../../domain/area-blades';
import { PortalService } from '../../domain/portal-service';

@Component({
  selector: 'ospa-home',
  templateUrl: './home.component.html',
  styleUrls: ['../global.scss', './home.component.scss'],
})
export class HomeComponent {
  vm = { title: 'title', user: { name: 'name', emailaddress: 'emailaddress' }, portalService: <PortalService>null };
  tile: any = { title: 'title', subTitle: 'subTitle' };

  constructor(portalService: PortalService, public areaBlades: AreaBlades) {
    this.vm.portalService = portalService;
  }
}

/*
namespace angularportalazure {
    AngularPortalHomeController.$inject = ['$scope', 'angularportalazure.portalService'];
    function AngularPortalHomeController($scope: angular.IScope, portalService: angularportalazure.PortalService) {
        this.$onInit = () => {
            portalService.areaNotification = new angularportalazure.AreaNotification($scope, portalService);
            portalService.areaBlades = new angularportalazure.AreaBlades($scope, portalService);
        };
    }

    let angularPortalHome = {
        templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/home/home.html',
        controller: AngularPortalHomeController,
        bindings: {
            vm: '='
        }
    };

    angular.module('angularportalazure').component('angularPortalHome', angularPortalHome);
}
*/
