import { Component, OnInit } from '@angular/core';

import { AppService } from '@one-system/one-sys-core';

@Component({
    selector: 'ospa-main',
    templateUrl: './main.component.html', 
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    constructor(public appService: AppService) { }

    ngOnInit() {
        setTimeout(() => { this.appService.appConfigService.appConfig.isShowSplashScreen = false; }, 2000);
    }
}
