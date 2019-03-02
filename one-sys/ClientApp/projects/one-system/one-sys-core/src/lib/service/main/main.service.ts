import { Injectable } from '@angular/core';

import { AreaBlades } from '../../domain/area-blades';
import { AreaNotification } from '../../domain/area-notification';
import { Panorama } from '../../domain/panorama';
import { PortalShell } from '../../domain/portal-shell';

import { BrowserWindowService } from '../base/browser-window.service';


@Injectable({
    providedIn: 'root'
})
export class MainService {
    // #region Constructors

    //constructor(title: string = null) {
    constructor() {
        this.portalShell = new PortalShell(this);
    }

    // #endregion

    // #region Properties

    portalShell: PortalShell;
    panorama: Panorama;
    areaBlades: AreaBlades;
    areaNotification: AreaNotification;

    browserWindowService: BrowserWindowService;

    // #endregion
}
