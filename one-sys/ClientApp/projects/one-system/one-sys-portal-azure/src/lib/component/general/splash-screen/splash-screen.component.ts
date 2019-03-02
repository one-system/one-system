import { Component, OnInit } from '@angular/core';

import { AppService } from '@one-system/one-sys-core';

@Component({
    selector: 'ospa-splash-screen',
    templateUrl: './splash-screen.component.html',
    styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent implements OnInit {
    constructor(public appService: AppService) { }

    ngOnInit() {
    }
}
