import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Location } from '@angular/common';
import { Route } from '@angular/router';

import { PortalService } from './portal-service';
import { WindowRef } from '../services/windowref';

import { AreaBlades } from './area-blades';

describe('AreaBlades', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [PortalService, WindowRef, Location, AreaBlades]
    });
  });

  //#region Constructor

  it('should be initialized', inject([AreaBlades], (sut: AreaBlades) => {
    expect(sut).toBeTruthy();
  }));

  //#endregion

  //#region Public Static Methods

  it('static: syncRoutesWithRoutesOutlets()', () => {
    // Assign
    let routes: Route[] = [{ path: 'path0', outlet: '' }, { path: 'path1', outlet: '' }];
    let routesOutlets: { routerPath: string, outletName: string }[] = [{ routerPath: 'path0', outletName: 'outlet0' }, { routerPath: 'path1', outletName: 'outlet1' }];

    // Act
    AreaBlades.syncRoutesWithRoutesOutlets(routes, routesOutlets);

    // Assert
    expect(routes[0].outlet).toBe('outlet0');
    expect(routes[1].outlet).toBe('outlet1');
  });

  //#endregion

  //#region Public Methods

  it('public: showHidePanorama()', inject([AreaBlades], (sut: AreaBlades) => {
    // Act
    sut.showHidePanorama();

    // Log
    console.log(`sut.portalService.panorama.isVisible: ${sut.portalService.panorama.isVisible}`)

    // Assert
    expect(sut.portalService.panorama).toBeTruthy();
    expect(sut.portalService.panorama.isVisible).toBeTruthy();
  }));

  //#endregion

  //#region Private Methods

  //it('private: xxx()', inject([AreaBlades], (sut: AreaBlades) => {
  //  // Act (private function, use array index)
  //  let result = sut['xxx']('xxx');

  //  // Assert
  //  expect(result.length).toBe(2);
  //}));

  //#endregion
});
