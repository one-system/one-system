import { Injectable } from '@angular/core';

import { MainService } from '../main/main.service';

// #region Global Functions

function getWindow(): any {
    return window;
}

// #endregion

@Injectable({
    providedIn: 'root' // singleton: should be provided in the application root
})
export class BrowserWindowService {
    // #region Constructors

    constructor(mainService: MainService) {
        //this.mainService = mainService;
    }

    // #endregion

    // #region Properties

    //mainService: MainService;
    windowResizeHandler: () => void;

    // #endregion

    // #region Angular Life-cycle

    ngOnDestroy() {
        this.removeWindowResizeListener();
    }

    // #endregion

    // #region Public Methods

    // More information: https://brianflove.com/2018/01/11/angular-window-provider/
    get browserWindow(): Window {
        return getWindow();
    }

    private removeWindowResizeListener() {
        if (this.windowResizeHandler !== undefined) {
            this.browserWindow.removeEventListener('resize', this.windowResizeHandler);
        }
    }

    setupWindowResizeListener(callback: () => void) {
        // http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
        let id: number;

        this.browserWindow.addEventListener('resize', this.windowResizeHandler = () => {
            clearTimeout(id);
            id = <number><unknown>setTimeout(() => { callback(); }, 50);
        });
    }

    // #endregion
}
