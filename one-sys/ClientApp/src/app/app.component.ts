import { Component, OnInit } from '@angular/core';
import { MainOscService, AppboardEntry, SidebarEntry } from '@one-system/one-sys-core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'one-sys';

    constructor(public mainOscService: MainOscService) { }

    ngOnInit() {
        this.mainOscService.appConfigService.appConfig.sidebar.isVisible = false;
        this.mainOscService.appConfigService.appConfig.sidebar.push(new SidebarEntry('My App1', 'icon1'));
        this.mainOscService.appConfigService.appConfig.sidebar.push(new SidebarEntry('My App2', 'icon2'));
        this.mainOscService.appConfigService.appConfig.sidebar.push(new SidebarEntry('My App3', 'icon3'));

        this.mainOscService.appConfigService.appConfig.appboard.isVisible = true;
        this.mainOscService.appConfigService.appConfig.appboard.push(new AppboardEntry('My App1', 'bladenav1', 'Blade Nav 1', 'far fa-tablet', 'rgb(201, 112, 112)'));
        this.mainOscService.appConfigService.appConfig.appboard.push(new AppboardEntry('My App2', 'bladegrid1', 'Blade Grid 1', 'far fa-alarm-clock','rgb(12, 112, 112)'));
        this.mainOscService.appConfigService.appConfig.appboard.push(new AppboardEntry('My App3', 'bladedetail1', 'Blade Detail 1', 'far fa-cannabis', 'rgb(45, 170, 112)'));
        this.mainOscService.appConfigService.appConfig.appboard.push(new AppboardEntry('My App4', 'bladenav1', 'Blade Nav 1', 'far fa-apple-crate', 'rgb(145, 70, 112)'));
        this.mainOscService.appConfigService.appConfig.appboard.push(new AppboardEntry('My App5', 'bladegrid1', 'Blade Grid 1', 'far fa-file-image', 'rgb(64, 133, 64)'));
        this.mainOscService.appConfigService.appConfig.appboard.push(new AppboardEntry('My App6', 'bladedetail1', 'Blade Detail 1', 'far fa-align-right', 'rgb(164, 33, 64)'));
        this.mainOscService.appConfigService.appConfig.appboard.push(new AppboardEntry('My App7', 'bladenav1', 'Blade Nav 1', 'far fa-star-christmas', 'rgb(64, 23, 111)'));
        this.mainOscService.appConfigService.appConfig.appboard.push(new AppboardEntry('My App8', 'bladegrid1', 'Blade Grid 1', 'far fa-lightbulb-on', 'rgb(45, 112, 112)'));
        this.mainOscService.appConfigService.appConfig.appboard.push(new AppboardEntry('My App9', 'bladedetail1', 'Blade Detail 1', 'far fa-analytics', 'rgb(64, 133, 64)'));
    }
}
