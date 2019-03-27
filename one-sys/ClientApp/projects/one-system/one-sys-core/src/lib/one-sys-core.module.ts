import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { AppConfig } from './domain/app-config';

import { MainOscService } from './service/main-osc/main-osc.service';
import { BladeService } from './service/blade/blade.service';
import { BrowserService } from './service/browser/browser.service';

import { ThemingDirective } from './directive/theming/theming.directive';

import { RouterOutletNamedDirective } from './directive/router-outlet-named/router-outlet-named.directive';

@NgModule({
    imports: [],
    declarations: [
        // Component
        // Directive
        RouterOutletNamedDirective,
        ThemingDirective
    ],
    exports: [
        // Component
        // Directive
        RouterOutletNamedDirective,
        ThemingDirective
    ],
    providers: [
        MainOscService,
        BladeService,
        BrowserService
    ]
})
export class OneSysCoreModule {
    constructor(@Optional() @SkipSelf() parentModule: OneSysCoreModule) {
        if (parentModule) {
            throw new Error(
                'OneSysCoreModule is already loaded. Import it in only in one AppModule.');
        }
    }

    static forRoot(appConfig: AppConfig): ModuleWithProviders {
        return {
            ngModule: OneSysCoreModule,
            providers: [
                { provide: AppConfig, useValue: appConfig }
            ]
        };
    }
}
