import { Injectable } from '@angular/core';
import { WindowRef } from '../services/windowref';

import { AvatarMenu } from './avatar-menu';
import { PortalService } from './portal-service';
import { Startboard } from './start-board';
import { UserControlBase } from './user-control-base';

@Injectable()
export class Panorama extends UserControlBase {

  // #region Properties

  title: string;
  isVisible: boolean = true;

  avatarMenu: AvatarMenu;
  startboard: Startboard;

  // #endregion

  // #region Constructor

  constructor(public windowRef: WindowRef) {
    super(windowRef);
    this.title = '';
    //this.portalService.panorama = this;

    this.avatarMenu = new AvatarMenu(windowRef); // this.$scope, 
    this.startboard = new Startboard(windowRef); // this.$scope, 
  }

  // #endregion
}
