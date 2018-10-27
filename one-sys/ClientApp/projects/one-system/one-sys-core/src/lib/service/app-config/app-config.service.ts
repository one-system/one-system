// #region Imports

import { Injectable } from '@angular/core';
import { Apps } from '../../domain/apps';

// #endregion

@Injectable({
  providedIn: 'root' // singleton: should be provided in the application root
})
export class AppConfigService {
  // #region Constructors

  constructor() {
  }

  // #endregion

  // #region Properties

  apps: Apps = Apps.create();

  isShowSplashscreen: boolean = true;

  // #endregion

  // #region Public Methods

  // #endregion

  // #endregion
}
