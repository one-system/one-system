import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationStart, Route } from '@angular/router';

import { IAddBladeEventArgs } from './iadd-blade-event-args';
import { PortalService } from './portal-service';
import { UserControlBase } from './user-control-base';
import { RouterOutlet } from './router-outlet';

import { WindowRef } from '../services/windowref';

@Injectable()
export class AreaBlades extends UserControlBase {
  // #region Constructor

  constructor(public portalService: PortalService, public windowRef: WindowRef, public router: Router, public location: Location) {
    super(windowRef);

    this.router.events.subscribe((routerEvent) => {
      if (routerEvent instanceof NavigationStart) {
        // get router and outlets
        let routesOutlets: RouterOutlet[] = RouterOutlet.convertUrlPath(routerEvent.url);
        // reverse order
        routesOutlets = routesOutlets.reverse();
         // add blades
        this.addBladesByRouteOutlets(routesOutlets);
         // update routes with outlets
        AreaBlades.syncRoutesWithRoutesOutlets(this.router.config, routesOutlets);
        this.showHidePanorama();
      }
    });

    this.portalScroll = this.windowRef.nativeWindow.document.getElementById('apa-portal-scroll');

    this.setupAddBladeListener();
    this.setupShowHideNotificationAreaListener();
    this.setupWindowResizeListener(() => { this.setPortalScrollCss(); });
  }

  // #endregion

  // #region Properties

  bladeOutletNames: string[] = [];

  private addBladeListener: () => void;
  private areaNotificationHideListener: () => void;
  private areaNotificationShowListener: () => void;
  private bladeId: number = 0;
  private portalScroll: HTMLElement;

  // #endregion

  //#region Static Methods

  /**
   * Outlets in [routes] are syncing with outlets provided in [routesOutlets].
   * @param routes: e.g. use router.config
   * @param routesOutlets
   */
  static syncRoutesWithRoutesOutlets(routes: Route[], routesOutlets: RouterOutlet[]) {
    routesOutlets.forEach((routeBlade) => {
      routes.forEach((value) => {
        if (value.path === routeBlade.routerPath) {
          value.outlet = routeBlade.outletName;
        }
      });
    })
  }

  //#endregion

  // #region Public Methods

  raiseBladeOnActivateEvent(args: IAddBladeEventArgs) {
    let isEventRaised: boolean = false;

    this.bladeOutletNames.forEach((blade) => {
      //if (blade.path.toLowerCase() === args.path.toLowerCase()) {
      //  // Raise event onActivate
      //  blade.onActivate();
      //  isEventRaised = true;
      //  return;
      //}
    });
  }

  raiseAddBladeEvent(args: IAddBladeEventArgs) {
    let isBladeAlreadyShown: boolean = false;
    this.bladeOutletNames.forEach((blade) => {
      //if (blade.path.toLowerCase() === args.path.toLowerCase()) {
      //  // Blade is already shown, just activate it again
      //  blade.onActivate();
      //  isBladeAlreadyShown = true;
      //  return;
      //}
    });

    if (!isBladeAlreadyShown) {
      // Add the blade, since it is not yet shown
      //this.portalService.$rootScope.$broadcast('AreaBlades.AddBlade', args);
    }
  }

  addFirstBlade(routerPath: string): void {
    this.clearAll();
    this.showHidePanorama();
    this.addBlade(routerPath);
  }

  addBlade(routerPath: string): void {
    // #region Process Parameters

    routerPath = routerPath.toLowerCase();
    if (routerPath === undefined || routerPath === '') { return; }

    // #endregion

    // #region Google Analytics PageTrack

    console.log('TODO: Add Google Analytics pageTrack');
    //this.portalService.$analytics.pageTrack(path.toLowerCase());

    // #endregion

    // #region Clear all children of the parent path

    console.log('TODO: Remove (close) Blades based on senderPath');
    //this.clearChild(senderPath);

    // #endregion

    // #region Make sure the blade is not yet show

    //console.log(routerPath);
    //console.log(this.bladeOutletNames);
    //this.bladeOutletNames.forEach((bladeOutletName) => {
    //  if (bladeOutletName === routerPath) {
    //    console.error('[AreaBlades.addBlade] routerPath: \'' + routerPath + '\' will not be added. It is already added.');
    //    return;
    //  }
    //});

    // #endregion

    // #region Create New BladeOutletName and Add It

    let bladeOutletName = 'blade' + this.bladeId++;
    this.addBladeOutletName(bladeOutletName);

    // #endregion

    // #region Set Router Outlet Name

    this.router.config.forEach((route) => {
      if (route.path === routerPath) {
        route.outlet = bladeOutletName;
      }
    });

    // #endregion

    // #region Use Router To Navigate (Instantiate) to the Blade

    this.router.navigate([{ outlets: { [bladeOutletName]: [routerPath] } }]);

    // #endregion
  }

  addBladesByRouteOutlets(routesOutlets: RouterOutlet[]) {
    routesOutlets.forEach((routesOutlet) => {
      this.addBladeOutletName(routesOutlet.outletName);
    })
  }

  addBladeOutletName(routerOutletName: string) {
    let isRouterOutletNameFound: boolean = false;

    this.bladeOutletNames.forEach((name: string) => {
      if (name === routerOutletName) {
        isRouterOutletNameFound = true;
      }
    })

    if (!isRouterOutletNameFound) {
      console.log('!isRouterOutletNameFound');
      this.bladeOutletNames.push(routerOutletName);
    }
  }

  clearAll(): void {
    console.log(`clearAll`);
    this.bladeId = 0;
    this.bladeOutletNames.length = 0;

    this.router.navigate(['/']);
    //this.router.nav.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
    this.showHidePanorama();
  }

  clearPath(routerPath: string): void {
    console.log(`clearPath`);
    // #region Process Parameters

    routerPath = routerPath.toLowerCase();
    if (routerPath === undefined || routerPath === '') { return; }

    // #endregion

    console.log(this.bladeOutletNames.length);
    let isremoved = this.bladeOutletNames.some((bladeOutletName, index) => {
      console.log(`${bladeOutletName} - ${routerPath}`)
      if (bladeOutletName === routerPath) {
        this.bladeOutletNames.length = index;
        return true;
      }
    });
    console.log(this.bladeOutletNames.length);

    //if (!isremoved && this.portalService.areaNotification.path === path) {
    //  this.portalService.areaNotification.hide();
    //  isremoved = true;
    //}

    //if (!isremoved) {
    //  throw new Error('[angularportalazure.AreaBlades.clearPath] path: \'' + path + '\' could not be removed, since path not found in bladeUrls.');
    //}

    this.location.back();
    this.showHidePanorama();
  }

  clearLevel(level: number) {
    console.log(`clearLevel`);
    if (this.bladeOutletNames.length < level) {
      throw new Error('[angularportalazure.AreaBlades] level: \'' + level + '\' could not be cleard, since only \'' + this.bladeOutletNames.length + '\' available.');
    }

    if (level === 0) { level = 1; }
    this.bladeOutletNames.length = level - 1;
    this.showHidePanorama();
  }

  clearLastLevel() {
    console.log(`clearLastLevel`);
    this.clearLevel(this.bladeOutletNames.length);
    this.showHidePanorama();
  }

  clearChild(path: string): void {
    console.log(`clearChild`);
    path = path.toLowerCase();

    if (path === '') {
      return;
    }
    let isremoved = this.bladeOutletNames.some((bladeOutletName, index) => {
      // we do not distinguish between lower and upper case path name
      if (bladeOutletName === path) {
        this.bladeOutletNames.length = index + 1;
        return true;
      }
    });
    if (!isremoved) {
      throw new Error('[angularportalazure.AreaBlades.clearChild] path: \'' + path + '\' could not be removed, since path not found in bladeUrls.');
    }

    this.showHidePanorama();
  }

  showHidePanorama() {
    if (this.portalService.panorama !== undefined) {
      if (this.bladeOutletNames.length === 0) {
        this.portalService.panorama.isVisible = true;
      } else {
        this.portalService.panorama.isVisible = false;
      }
    }
  }

  /** We need to call this when AreaBlades is no longer used, otherwise the listener does not get removed. */
  close() {
    // Unregister Listeners
    this.addBladeListener();
    this.areaNotificationShowListener();
    this.areaNotificationHideListener();
    this.showHidePanorama();
  }

  // #endregion

  // #region Private Methods

  private setPortalScrollCss() {
    if (this.portalScroll == null) { return; }

    //this.portalScroll.style.marginRight = this.portalService.areaNotification.widthAreaUsed + 'px';
  }

  private setupShowHideNotificationAreaListener() {
    console.log('AreaBlades.areaNotificationShowListener not yet set ... ');
    //this.areaNotificationShowListener = this.portalService.$rootScope.$on('AreaNotification.Show', (event: any, args: IAddBladeEventArgs) => { // event: ng.IAngularEvent
    //  this.setPortalScrollCss();
    //});

    //this.areaNotificationHideListener = this.portalService.$rootScope.$on('AreaNotification.Hide', (event: any, args: IAddBladeEventArgs) => { // event: ng.IAngularEvent
    //  this.setPortalScrollCss();
    //});
  }

  private setupAddBladeListener() {
    console.log('AreaBlades.setupAddBladeListener not yet set ... ');
    //this.addBladeListener = this.portalService.$rootScope.$on('AreaBlades.AddBlade', (event: any, args: IAddBladeEventArgs) => { // event: ng.IAngularEvent
    //  this.addBlade(args.path, args.pathSender);
    //});
  }

  private extractRouterOutletNames(urlPath: string): string[] {
    // Return empty array, if urlPath = /
    if (urlPath === '/') { return []; }

    // Extract routerOutletNames from urlPath, e.g. /(blade1:bladegrid1//blade0:bladenav1) = blade1 and blade2
    let regex = /(\(|\/\/)(.*?):/g
    let match = regex.exec(urlPath);
    console.log(match);
    //if (match.length === 0) {
    //  throw new Error(`[Blade.extractRouterOutletNames] Could not extract RouterOutletNames from: ${urlPath}`);
    //}

    let bladeOutletNames: string[] = [];

    bladeOutletNames.push(match[2]);
    //match.groups.((value) => {
    //  console.log(value);
    //  //bladeOutletNames.push(value);
    //})

    console.log(bladeOutletNames);

    return bladeOutletNames;
  }

  // #endregion
}
