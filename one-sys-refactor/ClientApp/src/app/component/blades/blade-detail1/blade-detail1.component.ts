import { Component } from '@angular/core';

import { BladeDetail } from '@one-system/one-sys-portal-azure';
import { AreaBlades } from '@one-system/one-sys-portal-azure';
import { WindowRef } from '@one-system/one-sys-portal-azure';

@Component({
  selector: 'blade-detail1',
  templateUrl: './blade-detail1.component.html',
  styleUrls: ['./blade-detail1.component.scss']
})
export class BladeDetail1Component extends BladeDetail<any> {
  // #region Constructors

  constructor(public areaBlades: AreaBlades, public windowRef: WindowRef) {
    super(areaBlades, windowRef, 'bladedetail1', 'Blade Detail', 'Sub Title', 700);
  }

  // #endregion

}
