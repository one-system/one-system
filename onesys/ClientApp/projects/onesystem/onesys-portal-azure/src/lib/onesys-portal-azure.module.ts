import { NgModule } from '@angular/core';
import { OnesysPortalAzureComponent } from './onesys-portal-azure.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
  ],
  declarations: [
    OnesysPortalAzureComponent,
    PageNotFoundComponent
  ],
  exports: [OnesysPortalAzureComponent]
})
export class OnesysPortalAzureModule { }
