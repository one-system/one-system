import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { App1Module, routes } from 'app1';

// TODO: 2018-10-21\hp: Workaround for lazy loading routes (remove export, after fixed) (see: https://github.com/angular/angular-cli/issues/6373)

@NgModule({
  imports: [
    App1Module,
    RouterModule.forChild(routes)
  ]
})
export class App1ModuleLazyLoader { }
