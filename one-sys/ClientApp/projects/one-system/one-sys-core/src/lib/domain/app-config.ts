import { Sidebar } from "./sidebar/sidebar";
import { Appboard } from "./dashboard/appboard/appboard";

export class AppConfig {
    // #region Constructors

    constructor() {
    }

    // #endregion

    // #region Properties

    appTitle: string = 'One-System Portal Azure';
    isShowSplashScreen: boolean = true;
    username: string = 'user@one-system.domain';
    usernameTenant: string = 'One-System';

    sidebar: Sidebar = Sidebar.create();
    appboard: Appboard = Appboard.create();

    // #endregion

    // #region Public Methods

    // #endregion
}
