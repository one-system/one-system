import { MainService } from '../service/main/main.service';

import { AvatarMenu } from './avatar-menu';
//import { Startboard } from './dashboard/startboard/startboard';
import { UserControlBase } from './base/user-control-base';

export class Panorama extends UserControlBase {
    // #region Constructors

    constructor(mainService: MainService) {
        super(mainService);
        this.avatarMenu = new AvatarMenu(mainService);
        //this.startboard = new Startboard(mainService);
    }

    // #endregion

    // #region Properties

    isVisible: boolean = true;

    avatarMenu: AvatarMenu;
    //startboard: Startboard;

    // #endregion

    // #region Public Methods

    // #endregion
}
