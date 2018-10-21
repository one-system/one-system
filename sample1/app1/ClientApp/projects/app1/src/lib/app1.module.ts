import { NgModule } from '@angular/core';
import { App1Component } from './app1.component';

import { OnesysCoreModule } from '@onesystem/onesys-core';
import { OnesysPortalAzureModule } from '@onesystem/onesys-portal-azure';

@NgModule({
  imports: [
    OnesysCoreModule,
    OnesysPortalAzureModule
  ],
  declarations: [App1Component],
  exports: [App1Component]
})
export class App1Module { }
