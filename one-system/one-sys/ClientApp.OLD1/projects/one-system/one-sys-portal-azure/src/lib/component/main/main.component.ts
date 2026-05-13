import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

import { MainOscService } from '@one-system/one-sys-core';

interface DinoThemes {
    [name: string]: DinoTheme;
}

interface DinoTheme {
    '--topbar-color': string;
    '--topbar-background-color': string;
    '--topbar-home-color': string;
    '--blade-statusbar-background-color': string;
    '--blade-commands-background-color': string;
}

@Component({
    selector: 'ospa-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    constructor(public mainOscService: MainOscService, private router: Router) {
    }

    readonly themeProps = [
        'color-main',
        'color-main-darken',
        'color-main-darken2',
        'color-main-lighten',
        'color-accent',
    ];

    readonly themes: DinoThemes = {
        'black': {
            '--topbar-color': '#fff',
            '--topbar-background-color': '#1c1c1c',
            '--topbar-home-color': '#fff',
            '--blade-statusbar-background-color': '#293644',
            '--blade-commands-background-color': '#3e4045',
        },
        'white': {
            '--topbar-color': '#1c1c1c',
            '--topbar-background-color': '#efefef',
            '--topbar-home-color': '#1c1c1c',
            '--blade-statusbar-background-color': '#dcdcdc',
            '--blade-commands-background-color': '#c7c7c7',
        }
    };

    selectedTheme: DinoTheme = this.themes['black'];

    ngOnInit() {
        setTimeout(() => { this.mainOscService.appConfigService.appConfig.isShowSplashScreen = false; }, 500);
    }

    setTheme(themeIndex: string) {
        this.selectedTheme = this.themes[themeIndex];
    }
}
