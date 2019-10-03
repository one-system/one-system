import { Component } from '@angular/core';

import { BladeNav } from '@one-system/one-sys-portal-azure';
import { BladeNavItem } from '@one-system/one-sys-portal-azure';
import { PortalService } from '@one-system/one-sys-portal-azure';
import { AreaBlades } from '@one-system/one-sys-portal-azure';
import { WindowRef } from '@one-system/one-sys-portal-azure';

@Component({
  selector: 'blade-nav1',
  templateUrl: './blade-nav1.component.html',
  styleUrls: ['./blade-nav1.component.scss']
})
export class BladeNav1Component extends BladeNav {
  // #region Constructors

  constructor(public areaBlades: AreaBlades, public windowRef: WindowRef) {
    super(areaBlades, windowRef, 'bladenav1', 'Blade Nav', 'Sub Title');

    this.blade.items = [
      new BladeNavItem('Offene Offerten', 'far fa-building', 'bladegrid1', null, 'ammsfilesystem-admin, ammsfilesystem-user-bvd'),
      new BladeNavItem('Offene AuftrÃƒÂ¤ge', 'far fa-building', 'bladedetail1', null, 'ammsfilesystem-admin, ammsfilesystem-user-bvd'),
      new BladeNavItem('Rechnungen', 'far fa-building', 'bladegrid1', null, 'ammsfilesystem-admin, ammsfilesystem-user-bvd', false),
      new BladeNavItem(null, null, null, null, 'ammsfilesystem-admin, ammsfilesystem-user-bvd'),
      new BladeNavItem('SHOP (Office Supply)', 'far fa-file-image', 'bladedetail1', null, 'ammsfilesystem-admin, ammsfilesystem-user-bvd'),
      new BladeNavItem(null, null, null, null, 'ammsfilesystem-admin, ammsfilesystem-user-bvd'),
      new BladeNavItem('PROD-DB', 'far fa-file-alt', 'bladegrid1', null, 'ammsfilesystem-admin, ammsfilesystem-user-bvd'),
      new BladeNavItem('MEDIEN-DB', 'far fa-file-image', 'bladedetail1', null, 'ammsfilesystem-admin, ammsfilesystem-user-bvd'),
      new BladeNavItem('NEOSEVEN', 'far fa-file-image', 'bladegrid1', null, 'ammsfilesystem-admin, ammsfilesystem-user-bvd')
    ];
  }

  // #endregion
}
