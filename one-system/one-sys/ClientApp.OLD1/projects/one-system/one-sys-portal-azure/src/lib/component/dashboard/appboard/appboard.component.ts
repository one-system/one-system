import { Component, OnInit } from '@angular/core';

import { MainOscService } from '@one-system/one-sys-core';

@Component({
    selector: 'ospa-appboard',
    templateUrl: './appboard.component.html',
    styleUrls: ['./appboard.component.scss']
})
export class AppboardComponent implements OnInit {
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
