import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Blade } from '../../domain/blade';
import { PortalService } from '../../domain/portal-service';

@Component({
  selector: 'ospa-blade',
  templateUrl: './blade.component.html',
  styleUrls: ['../global.scss', './blade.component.scss'],
})
export class BladeComponent implements OnInit {
  @Input() blade: Blade;

  constructor(private portalService: PortalService, private router: Router) {
  }

  ngOnInit(): void {
    this.blade.setBladeOutletName(this.router.url);
    console.log(this.blade);
  }

  //close() {
  //  this.portalService.areaBlades.clearLastLevel();
  //}
}

/*
/// <reference types="angular" />
/// <reference path="../../domain/portalservice.ts" />

namespace angularportalazure {
    AngularPortalBladeController.$inject = ['angularportalazure.portalService'];
    function AngularPortalBladeController(portalService: angularportalazure.PortalService) {
        this.$onInit = () => {
            this.close = () => { };
        };
    }

    let angularPortalBlade = {
        transclude: true,
        templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/blade/blade.html',
        controller: AngularPortalBladeController,
        bindings: {
            vm: '='
        }
    };

    angular.module('angularportalazure').component('angularPortalBlade', angularPortalBlade);
}
*/
