import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OneSysPortalAzureModule } from '@one-system/one-sys-portal-azure';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BladeDetail1Component } from './component/blades/blade-detail1/blade-detail1.component';
import { BladeGrid1Component } from './component/blades/blade-grid1/blade-grid1.component';
import { BladeNav1Component } from './component/blades/blade-nav1/blade-nav1.component';

@NgModule({
  declarations: [
    AppComponent,
    BladeDetail1Component,
    BladeGrid1Component,
    BladeNav1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OneSysPortalAzureModule // Should be last, since it contains the ** route
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
