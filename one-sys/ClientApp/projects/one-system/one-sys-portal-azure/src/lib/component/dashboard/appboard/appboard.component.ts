import { Component, OnInit } from '@angular/core';

import { AppService } from '@one-system/one-sys-core';

@Component({
    selector: 'ospa-appboard',
    templateUrl: './appboard.component.html',
    styleUrls: ['./appboard.component.scss']
})
export class AppboardComponent implements OnInit {

    constructor(public appService: AppService) { }

    ngOnInit() {
    }
}
