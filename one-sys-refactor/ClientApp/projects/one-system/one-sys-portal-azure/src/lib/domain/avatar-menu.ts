import { WindowRef } from '../services/windowref';

import { PortalService } from './portal-service';
import { UserAccount } from './user-account';
import { UserControlBase } from './user-control-base';

export class AvatarMenu extends UserControlBase {
  //#region Properties

  userAccount: UserAccount;

  //#endregion

  //#region Constructors

  constructor(public windowRef: WindowRef) { // $scope: angular.IScope, 
    super(windowRef); // $scope, 

    this.userAccount = new UserAccount('user@domain.com', 'firstname', 'lastname');
  }

  //#endregion
}
