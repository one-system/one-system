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

  appTitle: string = 'One-System Portal Azure';
  isShowSplashscreen: boolean = true;
  username: string = 'user@one-system.domain';
  usernameTenant: string = 'One-System';

  apps: Apps = Apps.create();

  // #endregion

  // #region Public Methods

  // #endregion

  // #endregion
}
