import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { AppConfig } from './domain/app-config';
import { MainOscService } from './service/main-osc/main-osc.service';
import { BladeService } from './service/blade/blade.service';
import { BrowserService } from './service/browser/browser.service';

@NgModule({
    imports: [],
    declarations: [],
    exports: [],
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
                'OneSysCoreModule is already loaded. Import it in the AppModule only');
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
