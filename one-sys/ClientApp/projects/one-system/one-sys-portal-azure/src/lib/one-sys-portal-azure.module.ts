import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './component/main/main.component';
import { PageNotFoundComponent } from './component/general/page-not-found/page-not-found.component';
import { SidebarFavoriteComponent } from './component/sidebar/sidebar-favorite/sidebar-favorite.component';
import { SplashscreenComponent } from './component/general/splashscreen/splashscreen.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MainComponent,
    PageNotFoundComponent,
    SidebarFavoriteComponent,
    SplashscreenComponent,
  ],
  exports: [
    MainComponent,
    PageNotFoundComponent
  ]
})
export class OneSysPortalAzureModule { }
