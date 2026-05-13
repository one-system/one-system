import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { WindowRef } from './services/windowref';

import { HomeComponent } from './component/home/home.component';
import { BladeComponent } from './component/blade/blade.component';
import { NavComponent } from './component/nav/nav.component';
//import { GridComponent } from './component/grid/grid.component';
import { OneSysPortalAzureComponent } from './one-sys-portal-azure.component';

import { AreaBlades } from './domain/area-blades';
import { Panorama } from './domain/panorama';
import { PortalService } from './domain/portal-service';

import { RouterOutletNamedDirective } from './directive/router-outlet-named/router-outlet-named.directive';

@NgModule({
  declarations: [
    RouterOutletNamedDirective,
    HomeComponent,
    BladeComponent,
    NavComponent,
    //GridComponent,
    OneSysPortalAzureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    RouterOutletNamedDirective,
    HomeComponent,
    BladeComponent,
    NavComponent,
    //GridComponent,
    OneSysPortalAzureComponent
  ],
  providers: [
    WindowRef,
    AreaBlades,
    Panorama,
    PortalService
  ],
})
export class OneSysPortalAzureModule { }
