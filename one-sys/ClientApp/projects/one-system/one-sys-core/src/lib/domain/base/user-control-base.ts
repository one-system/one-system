import { MainService } from '../../service/main/main.service';
//import { BrowserWindowService } from '../service/base/browser-window.service';

export class UserControlBase {
    // #region Constructors

    constructor(public mainService: MainService) {
    }

    // #endregion

    // #region Properties

    //browserWindowService: BrowserWindowService;

    // #endregion

    // #region Public Methods
    /** Override */
    onActivate(): void {
    }

    /** Override */
    onActivated(): void {
    }

    // #endregion
}
