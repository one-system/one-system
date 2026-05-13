// https://devblogs.microsoft.com/premier-developer/angular-how-to-simplify-components-with-typescript-inheritance/

import { Injector } from '@angular/core';

export class InjectorService {
    // #region Properties

    private static injector?: Injector;

    // #endregion

    // #region Public Methods

    static setInjector(injector: Injector) {
        InjectorService.injector = injector;
    }

    static getInjector(): Injector | undefined {
        return InjectorService.injector;
    }

    // #endregion
}       
