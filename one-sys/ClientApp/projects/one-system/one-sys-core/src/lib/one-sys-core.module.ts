import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { AppService } from './service/app/app.service';
import { AppConfigService } from './service/app-config/app-config.service';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
    AppService
  ]
})
export class OneSysCoreModule {
  constructor(@Optional() @SkipSelf() parentModule: OneSysCoreModule) {
    if (parentModule) {
      throw new Error(
        'OneSysCoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: AppConfigService): ModuleWithProviders {
    return {
      ngModule: OneSysCoreModule,
      providers: [
        { provide: AppConfigService, useValue: config }
      ]
    };
  }
}
