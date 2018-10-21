import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OnesysCoreModule } from '@onesystem/onesys-core';
import { OnesysPortalAzureModule } from '@onesystem/onesys-portal-azure';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnesysCoreModule,
    OnesysPortalAzureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
