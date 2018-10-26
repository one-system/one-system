import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OneSysCoreModule } from '@one-system/one-sys-core';
import { OneSysPortalAzureModule } from '@one-system/one-sys-portal-azure';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OneSysCoreModule,
    OneSysPortalAzureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
