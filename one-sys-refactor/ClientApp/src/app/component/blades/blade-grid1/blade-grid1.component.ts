import { Component } from '@angular/core';

import { BladeGrid } from '@one-system/one-sys-portal-azure';
import { AreaBlades } from '@one-system/one-sys-portal-azure';
import { PortalService } from '@one-system/one-sys-portal-azure';
import { WindowRef } from '@one-system/one-sys-portal-azure';

@Component({
  selector: 'blade-grid1',
  templateUrl: './blade-grid1.component.html',
  styleUrls: ['./blade-grid1.component.scss']
})
export class BladeGrid1Component extends BladeGrid {
  // #region Constructors

  constructor(public areaBlades: AreaBlades, public windowRef: WindowRef) {
    super(areaBlades, windowRef, 'bladegrid1', 'Blade Grid', 'Sub Title', 700);
  }

  // #endregion
}
