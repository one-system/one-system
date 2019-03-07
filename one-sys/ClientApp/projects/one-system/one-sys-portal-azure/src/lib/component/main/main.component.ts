import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

import { MainOscService } from '@one-system/one-sys-core';

@Component({
    selector: 'ospa-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    constructor(public mainOscService: MainOscService, private router: Router) {
    }

    ngOnInit() {
        setTimeout(() => { this.mainOscService.appConfigService.appConfig.isShowSplashScreen = false; }, 2000);
    }
}
