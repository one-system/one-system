// #region Declarations

/// <reference path="blade.ts" />
/// <reference path="bladedata.ts" />
/// <reference path="bladenavitem.ts" />
/// <reference path="portalservice.ts" />
/// <reference path="usercontrolbase.ts" />

// #endregion

namespace angularportalazure {
    export class AreaNotification extends angularportalazure.UserControlBase {
        // #region Constructor

        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService) {
            super($scope, portalService);

            this.areaNotification = this.portalService.$window.document.getElementById('apa-notification-area');

            this.hide();
            this.setupWindowResizeListener(() => { this.calcualteCssStyles(); });
        }

        // #endregion

        // #region Properties

        // #endregion

        // #region Methods

        // #endregion
    }
}
