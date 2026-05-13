import { Component, OnInit } from '@angular/core';

import { MainOscService } from '@one-system/one-sys-core';
import { Blade } from '@one-system/one-sys-core';

@Component({
    selector: 'blade-nav1',
    templateUrl: './blade-nav1.component.html',
    host: {
        '[style.display]': "'inherit'"
    },
    styleUrls: ['./blade-nav1.component.scss']
})
export class BladeNav1Component extends Blade {
    // #region Constructors

    constructor(public mainOscService: MainOscService) {
        super('asdf', 'asdf', 'asdf', 50);
    }

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
