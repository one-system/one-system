import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OneSysCoreModule, AppConfigService, App } from '@one-system/one-sys-core';
import { OneSysPortalAzureModule } from '@one-system/one-sys-portal-azure';

let appConfig: AppConfigService = new AppConfigService();
appConfig.apps.push(new App('app1', 'My App1'));
appConfig.apps.push(new App('app2', 'My App2'));

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
