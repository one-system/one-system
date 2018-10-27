// #region Imports

import { Injectable, Optional } from '@angular/core';

import { AppConfigService } from '../app-config/app-config.service';
import { Apps } from '../../domain/apps';

// #endregion

@Injectable({
  providedIn: 'root' // singleton: should be provided in the application root
})
export class AppService {
  // #region Constructors

  constructor(@Optional() config: AppConfigService) {
    if (config) {
      this.config = config;
    }
  }

  // #endregion

  // #region Properties

  config: AppConfigService;

  // #endregion

  // #region Public Methods

  // #endregion

  // #endregion
}
