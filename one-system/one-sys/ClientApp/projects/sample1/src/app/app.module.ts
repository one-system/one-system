import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { OneSysCoreModule, AppConfig } from '@one-system/one-sys-core';
import { OneSysPortalAzureModule } from '@one-system/one-sys-portal-azure';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
