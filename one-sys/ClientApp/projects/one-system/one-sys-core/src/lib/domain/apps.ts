// #region Imports

import { App } from './app';

// #endregion

export class Apps extends Array<App> {
  // #region Constructors

  private constructor(items?: Array<App>) {
    super(...items);
  }

  static create<Apps>(): Apps {
    return Object.create(Apps.prototype);
  }

  // #endregion

  // #region Properties

  // #endregion

  // #region Public Methods

  push(...items: Array<App>): number {
    return super.push(...items);
  }

  // #endregion
}
