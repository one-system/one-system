import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OneSysCoreModule, App, Apps, AppService, AppConfigService, AppConfig } from '@one-system/one-sys-core';
import { OneSysPortalAzureModule } from '@one-system/one-sys-portal-azure';

import { App1Module } from 'app1';
import { App2Module } from 'app2';

let appConfig: AppConfig = new AppConfig();
let appConfigService: AppConfigService = new AppConfigService(appConfig);
let app: App = new App('app1', 'My App1');
appConfig.apps.push(app);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OneSysCoreModule.forRoot(appConfig),
    OneSysPortalAzureModule,
    App1Module,
    App2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
