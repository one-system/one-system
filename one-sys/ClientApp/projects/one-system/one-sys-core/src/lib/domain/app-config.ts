﻿import { Appboard } from "./dashboard/appboard/appboard";
import { Blades } from "./blade/blades";
import { Sidebar } from "./sidebar/sidebar";

export class AppConfig {
    // #region Properties

    appTitle: string = 'One-System Portal Azure';
    isShowSplashScreen: boolean = true;
    username: string = 'user@one-system.domain';
    usernameTenant: string = 'One-System';

    appboard: Appboard = Appboard.create();
    blades: Blades = Blades.create();
    sidebar: Sidebar = Sidebar.create();

    // #endregion

    // #region Constructors

    constructor() {
    }

    // #endregion

    // #region Public Methods

    // #endregion
}
