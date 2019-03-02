import { MainService } from '../service/main/main.service';
import { Panorama } from './panorama';

export class PortalShell {
    // #region Constructors

    constructor(mainService: MainService) {
        mainService.panorama = new Panorama(mainService);

        //if (title === '' || title === null || title === undefined) {
        //    mainService.panorama.title = mainService.browserWindowService.browserWindow.location.hostname.toLowerCase();
        //} else {
        //    mainService.panorama.title = title;
        //}
    }

    // #endregion

    // #region Properties

    // #endregion

    // #region Public Methods

    // #endregion
}
