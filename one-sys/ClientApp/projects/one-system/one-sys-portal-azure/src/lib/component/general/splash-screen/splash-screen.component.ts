import { Component, OnInit } from '@angular/core';

import { MainOscService } from '@one-system/one-sys-core';

@Component({
    selector: 'ospa-splash-screen',
    templateUrl: './splash-screen.component.html',
    styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {
    constructor(public mainOscService: MainOscService) { }

    ngOnInit() {
    }
}
