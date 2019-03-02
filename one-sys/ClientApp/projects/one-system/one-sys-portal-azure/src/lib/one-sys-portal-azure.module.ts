import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppboardComponent } from './component/dashboard/appboard/appboard.component';
import { BladeComponent } from './component/blade/blade.component';
import { MainComponent } from './component/main/main.component';
import { PageNotFoundComponent } from './component/general/page-not-found/page-not-found.component';
import { SidebarFavoriteComponent } from './component/sidebar/sidebar-favorite/sidebar-favorite.component';
import { SplashScreenComponent } from './component/general/splash-screen/splash-screen.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AppboardComponent,
        BladeComponent,
        MainComponent,
        PageNotFoundComponent,
        SidebarFavoriteComponent,
        SplashScreenComponent
    ],
    exports: [
        MainComponent,
        PageNotFoundComponent
    ]
})
export class OneSysPortalAzureModule { }
