import { Injectable, Injector } from '@angular/core';

import { AppConfigService } from '../app-config/app-config.service'
import { BladeService } from '../blade/blade.service'
import { InjectorService } from '../injector/injector.service'

@Injectable({
    providedIn: 'root' // singleton: should be provided in the application root
})
export class MainOscService {
    // #region Constructors

    //constructor(title: string = null) {
    constructor(
        public appConfigService: AppConfigService,
        public bladeService: BladeService,
        injector: Injector
    ) {
        InjectorService.setInjector(injector);
    }

    // #endregion
}
