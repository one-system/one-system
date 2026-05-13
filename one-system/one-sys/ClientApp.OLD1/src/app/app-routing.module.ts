import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BladeNav1Component } from './component/blades/blade-nav1/blade-nav1.component';
import { BladeGrid1Component } from './component/blades/blade-grid1/blade-grid1.component';
import { BladeDetail1Component } from './component/blades/blade-detail1/blade-detail1.component';

const routes: Routes = [
    { path: 'bladenav1', component: BladeNav1Component },
    { path: 'bladegrid1', component: BladeGrid1Component },
    { path: 'bladedetail1', component: BladeDetail1Component },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
