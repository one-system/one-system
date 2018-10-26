import { NgModule } from '@angular/core';
import { OneSysPortalAzureComponent } from './one-sys-portal-azure.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
  ],
  declarations: [
    OneSysPortalAzureComponent,
    PageNotFoundComponent
  ],
  exports: [OneSysPortalAzureComponent]
})
export class OneSysPortalAzureModule { }
