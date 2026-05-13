import { NgModule } from '@angular/core';
import { App2Component } from './app2.component';

import { OneSysCoreModule } from '@one-system/one-sys-core';
import { OneSysPortalAzureModule } from '@one-system/one-sys-portal-azure';

@NgModule({
  imports: [
    OneSysCoreModule,
    OneSysPortalAzureModule
  ],
  declarations: [App2Component],
  exports: [App2Component]
})
export class App2Module { }
