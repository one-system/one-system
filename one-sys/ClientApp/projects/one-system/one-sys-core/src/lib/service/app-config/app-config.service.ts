import { Injectable, Inject } from '@angular/core';
import { AppConfig } from '../../domain/app-config';

@Injectable({
    providedIn: 'root' // singleton: should be provided in the application root
})
export class AppConfigService {
    // #region Constructors

    constructor(public appConfig: AppConfig) {
        console.log(this.appConfig);
    }

    // #endregion

    // #region Properties

    // #endregion

    // #region Public Methods

    // #endregion
}
