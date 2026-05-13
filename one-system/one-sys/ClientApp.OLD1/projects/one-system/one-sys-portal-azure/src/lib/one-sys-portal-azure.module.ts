import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OneSysCoreModule } from '@one-system/one-sys-core';

import { AppRoutingModule } from './app-routing.module';

import { AppboardComponent } from './component/dashboard/appboard/appboard.component';
import { BladeComponent } from './component/blade/blade.component';
import { MainComponent } from './component/main/main.component';
import { PageNotFoundComponent } from './component/general/page-not-found/page-not-found.component';
import { SidebarFavoriteComponent } from './component/sidebar/sidebar-favorite/sidebar-favorite.component';
import { SplashScreenComponent } from './component/general/splash-screen/splash-screen.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        OneSysCoreModule,
        AppRoutingModule // Should be last, since it contains the ** route
    ],
    declarations: [
        // Components
        AppboardComponent,
        BladeComponent,
        MainComponent,
        PageNotFoundComponent,
        SidebarFavoriteComponent,
        SplashScreenComponent
    ],
    exports: [
        MainComponent,
        BladeComponent,
        PageNotFoundComponent
    ]
})
export class OneSysPortalAzureModule { }
