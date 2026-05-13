import { WindowRef } from '../services/windowref';

import { PortalService } from './portal-service';
import { Tiles } from './tiles';
import { UserControlBase } from './user-control-base';

export class Startboard extends UserControlBase {
  // #region Constructor

  constructor(public windowRef: WindowRef) { // $scope: angular.IScope, 
    super(windowRef); // $scope, 
    this.tiles = new Tiles();
  }

  // #endregion

  // #region Properties

  tiles: Tiles;

  // #endregion
}
