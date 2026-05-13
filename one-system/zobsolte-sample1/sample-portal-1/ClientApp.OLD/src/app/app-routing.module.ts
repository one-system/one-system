import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from '@one-system/one-sys-portal-azure';

import { AppComponent } from './app.component';

const routes: Routes = [
  // sample-portal-1
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  // app1
  // TODO:2018-10-21\hp: Workaround for lazy loading routes (remove export, after fixed) (see: https://github.com/angular/angular-cli/issues/6373)
  { path: 'app1', loadChildren: './app-routing-loader-app1.module#App1ModuleLazyLoader' },
  // app2
  // TODO:2018-10-21\hp: Workaround for lazy loading routes (remove export, after fixed) (see: https://github.com/angular/angular-cli/issues/6373)
  { path: 'app2', loadChildren: './app-routing-loader-app2.module#App2ModuleLazyLoader' },
  // Unmatched URL
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
