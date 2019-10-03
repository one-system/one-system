import { Component, Input } from '@angular/core';

import { BladeNav } from '../../domain/blade-nav';
import { PortalService } from '../../domain/portal-service';

@Component({
  selector: 'ospa-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['../global.scss', './nav.component.scss'],
})
export class NavComponent {
  @Input() blade: BladeNav;
  item: any;

  constructor(private portalService: PortalService) {
    //angular.forEach(scope.vm.navItems, function (item) {
    //  // Set some default values, depending on existing values
    //  if (item.isVisible == undefined) { item.isVisible = true; }
    //  if (item.title == undefined || item.title == '') { item.style = { cursor: 'default' }; }
    //  if (item.bladePath == undefined || item.bladePath == '') { item.style = { cursor: 'default' }; }
    //});
  }
}

/*
namespace angularportalazure {
    let angularPortalNav = {
        transclude: true,
        templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/nav/nav.html',
        controller: () => { },
        bindings: {
            vm: '='
        }
    };

    angular.module('angularportalazure').component('angularPortalNav', angularPortalNav);
}
*/
