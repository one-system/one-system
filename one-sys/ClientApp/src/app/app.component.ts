import { Component, OnInit } from '@angular/core';
import { AppService, AppboardEntry, SidebarEntry } from '@one-system/one-sys-core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'one-sys';

    constructor(public appService: AppService) { }

    ngOnInit() {
        //console.log('AppComponent:');
        //console.log(this.appService);

        this.appService.appConfigService.appConfig.sidebar.isVisible = false;
        this.appService.appConfigService.appConfig.sidebar.push(new SidebarEntry('My App1', 'icon1'));
        this.appService.appConfigService.appConfig.sidebar.push(new SidebarEntry('My App2', 'icon2'));
        this.appService.appConfigService.appConfig.sidebar.push(new SidebarEntry('My App3', 'icon3'));

        this.appService.appConfigService.appConfig.appboard.isVisible = true;
        this.appService.appConfigService.appConfig.appboard.push(new AppboardEntry('My App1', 'route1', 'the app for 1', 'far fa-tablet', 'rgb(201, 112, 112)'));
        this.appService.appConfigService.appConfig.appboard.push(new AppboardEntry('My App2', 'route2', 'the app for 2', 'far fa-alarm-clock','rgb(12, 112, 112)'));
        this.appService.appConfigService.appConfig.appboard.push(new AppboardEntry('My App3', 'route3', 'the app for 3', 'far fa-cannabis', 'rgb(45, 170, 112)'));
        this.appService.appConfigService.appConfig.appboard.push(new AppboardEntry('My App4', 'route3', 'the app for 4', 'far fa-apple-crate', 'rgb(145, 70, 112)'));
        this.appService.appConfigService.appConfig.appboard.push(new AppboardEntry('My App5', 'route4', 'the app for 5', 'far fa-file-image', 'rgb(64, 133, 64)'));
        this.appService.appConfigService.appConfig.appboard.push(new AppboardEntry('My App6', 'route5', 'the app for 6', 'far fa-align-right', 'rgb(164, 33, 64)'));
        this.appService.appConfigService.appConfig.appboard.push(new AppboardEntry('My App7', 'route6', 'the app for 7', 'far fa-star-christmas', 'rgb(64, 23, 111)'));
        this.appService.appConfigService.appConfig.appboard.push(new AppboardEntry('My App8', 'route7', 'the app for 8', 'far fa-lightbulb-on', 'rgb(45, 112, 112)'));
        this.appService.appConfigService.appConfig.appboard.push(new AppboardEntry('My App9', 'route8', 'the app for 9', 'far fa-analytics', 'rgb(64, 133, 64)'));
    }
}
