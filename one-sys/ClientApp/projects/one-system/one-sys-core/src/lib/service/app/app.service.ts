import { Injectable, Optional } from '@angular/core';

import { AppConfigService } from '../app-config/app-config.service';

@Injectable({
    providedIn: 'root' // singleton: should be provided in the application root
})
export class AppService {
    // #region Constructors

    constructor(@Optional() appConfigService: AppConfigService) {
        if (appConfigService) {
            this.appConfigService = appConfigService;
        }
    }

    // #endregion

    // #region Properties

    appConfigService: AppConfigService;

    // #endregion

    // #region Public Methods

    // #endregion
}
