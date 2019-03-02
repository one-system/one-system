import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OneSysCoreModule } from '@one-system/one-sys-core';
import { OneSysPortalAzureModule } from '@one-system/one-sys-portal-azure';
import { AppConfig } from '@one-system/one-sys-core';

const appConfig: AppConfig = new AppConfig();

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        OneSysCoreModule.forRoot(appConfig),
        OneSysPortalAzureModule
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
