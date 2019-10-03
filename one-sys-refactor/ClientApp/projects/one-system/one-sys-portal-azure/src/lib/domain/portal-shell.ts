import { Panorama } from './panorama';
import { PortalService } from './portal-service';

import { WindowRef } from '../services/windowref';

export class PortalShell {
  // #region Constructor

  constructor(public portalService: PortalService, public windowRef: WindowRef, title: string = null) {

    this.portalService = portalService;
    this.portalService.panorama = new Panorama(windowRef);
    this.portalService.panorama.title = title;

    if (title === '' || title === null || title === undefined) {
      this.portalService.panorama.title = this.windowRef.nativeWindow.location.hostname.toLowerCase();
    } else {
      this.portalService.panorama.title = title;
    }
  }

  // #endregion
}
