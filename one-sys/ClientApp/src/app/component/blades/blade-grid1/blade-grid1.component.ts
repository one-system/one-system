import { Component, OnInit } from '@angular/core';

import { MainOscService } from '@one-system/one-sys-core';

@Component({
    selector: 'blade-grid1',
    templateUrl: './blade-grid1.component.html',
    host: {
        '[style.display]': "'inherit'"
    },
    styleUrls: ['./blade-grid1.component.scss']
})
export class BladeGrid1Component {
    // #region Constructors

    constructor(public mainOscService: MainOscService) { }

    // #endregion

    // #region Angular Methods

    ngOnInit() {
    }

    // #endregion

    // #region Public Methods

    navigateTo(routerPath): void {
        this.mainOscService.bladeService.navigateTo(routerPath);
    }

    // #endregion
}
