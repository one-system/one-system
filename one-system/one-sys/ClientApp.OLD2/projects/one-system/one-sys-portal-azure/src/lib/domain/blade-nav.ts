import { WindowRef } from '../services/windowref';

import { BladeData } from './blade-data';
import { BladeNavItem } from './blade-nav-item';
import { AreaBlades } from './area-blades';

export class BladeNav extends BladeData<BladeNavItem> {
  // #region Constructor

  constructor(public areaBlades: AreaBlades, public windowRef: WindowRef, path: string, title: string = '', subtitle: string = '', width: number = 315) {
    super(areaBlades, windowRef, path, title, subtitle, width);
  }

  // #endregion

  // #region Properties

  blade: BladeNav;
  isNav: boolean = true;

  // #endregion

  // #region Methods



  // #endregion
}
