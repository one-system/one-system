import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { AppService } from './service/app/app.service';
import { AppConfig } from './domain/app-config';
import { MainService } from './service/main/main.service';

@NgModule({
    imports: [],
    declarations: [],
    exports: [],
    providers: [
        AppService,
        MainService
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
