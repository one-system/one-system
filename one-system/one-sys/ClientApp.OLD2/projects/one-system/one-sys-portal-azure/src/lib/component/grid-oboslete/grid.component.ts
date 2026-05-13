import { Component, Input } from '@angular/core';

import { Blade } from '../../domain/blade';
import { PortalService } from '../../domain/portal-service';

@Component({
  selector: 'ospa-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  @Input() blade: Blade;
  item: any;

  constructor(private portalService: PortalService) {

    //angular.forEach(scope.vm.items, function (item) {
    //  // Set some default values, depending on existing values
    //  if (item.isVisible == undefined) { item.isVisible = true; }
    //  if (item.title == undefined || item.title == '') { item.style = { cursor: 'default' }; }
    //  if (item.bladePath == undefined || item.bladePath == '') { item.style = { cursor: 'default' }; }
    //});
  }
}

/*
namespace angularportalazure {
    let angularPortalGrid = {
        transclude: true,
        templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/bladegrid/bladegrid.html',
        controller: () => { },
        bindings: {
            vm: '='
        }
    };

    angular.module('angularportalazure').component('angularPortalGrid', angularPortalGrid);
}
*/
