import { Component, OnInit } from '@angular/core';

import { Blade } from '@one-system/one-sys-core';

@Component({
    selector: 'ospa-blade',
    templateUrl: './blade.component.html',
    styleUrls: ['./blade.component.scss'],
})
export class BladeComponent extends Blade implements OnInit {

    constructor() {
        super('asdf', 'asdf', 'asdf', 400);
    }

    ngOnInit() {
    }
}
