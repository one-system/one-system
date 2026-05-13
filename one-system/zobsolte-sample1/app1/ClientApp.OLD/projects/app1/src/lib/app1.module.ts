import { NgModule } from '@angular/core';
import { App1Component } from './app1.component';

import { OneSysCoreModule } from '@one-system/one-sys-core';
import { OneSysPortalAzureModule } from '@one-system/one-sys-portal-azure';

@NgModule({
  imports: [
    OneSysCoreModule,
    OneSysPortalAzureModule
  ],
  declarations: [App1Component],
  exports: [App1Component]
})
export class App1Module { }
