import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { App2Module, routes } from 'app2';

// TODO:2018-10-21\hp: Workaround for lazy loading routes (remove export, after fixed) (see: https://github.com/angular/angular-cli/issues/6373)

@NgModule({
  imports: [
    App2Module,
    RouterModule.forChild(routes)
  ]
})
export class App2ModuleLazyLoader { }
