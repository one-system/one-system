import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App2Component } from './app2.component';

// TODO:2018-10-21\hp: Workaround for lazy loading routes (remove export, after fixed) (see: https://github.com/angular/angular-cli/issues/6373)
export const routes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  { path: 'todos', component: App2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class App2RoutingModule {
}
