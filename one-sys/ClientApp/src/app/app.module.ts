import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OneSysCoreModule } from '@one-system/one-sys-core';
import { OneSysPortalAzureModule } from '@one-system/one-sys-portal-azure';
import { AppConfig } from '@one-system/one-sys-core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BladeNav1Component } from './component/blades/blade-nav1/blade-nav1.component';
import { BladeGrid1Component } from './component/blades/blade-grid1/blade-grid1.component';
import { BladeDetail1Component } from './component/blades/blade-detail1/blade-detail1.component';

const appConfig: AppConfig = new AppConfig();

@NgModule({
    declarations: [
        AppComponent,
        BladeNav1Component,
        BladeGrid1Component,
        BladeDetail1Component
    ],
    imports: [
        BrowserModule,
        OneSysCoreModule.forRoot(appConfig),
        AppRoutingModule,
        OneSysPortalAzureModule // Should be last, since it contains the ** route
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
