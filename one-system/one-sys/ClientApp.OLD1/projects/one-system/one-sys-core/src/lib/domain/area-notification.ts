//import { MainService } from '../service/main/main.service';
import { UserControlBase } from './base/user-control-base';

export class AreaNotification extends UserControlBase {
    // #region Properties

    //mainService: MainService;

    path: string = '';
    widthAreaUsed: number = 0;

    private areaNotification: HTMLElement;

    private _width: number = 250;
    get width(): number {
        return this._width;
    }
    set width(value: number) {
        this._width = value;
        this.calcualteCssStyles();
    }

    private _backgroundColor: string = '#32383f';
    get backgroundColor(): string {
        return this._backgroundColor;
    }
    set backgroundColor(value: string) {
        this._backgroundColor = value;
        this.calcualteCssStyles();
    }

    // #endregion

    // #region Constructors

    // mainService: MainService
    constructor() {
        super();
        //this.mainService = mainService;

        //this.areaNotification = this.mainService.browserWindowService.browserWindow.document.getElementById('apa-notification-area');

        this.hide();
        //this.browserWindow.setupWindowResizeListener(() => { this.calcualteCssStyles(); });
    }

    // #endregion

    // #region Public Methods

    hide() {
        // Do not hide on false
        if (!this.onHide) {
            return;
        }

        this.path = '';
        this.widthAreaUsed = 0;
        this.areaNotification.style.display = 'none';

        //this.mainService.$rootScope.$broadcast('AreaNotification.Hide');
    }

    show(width: number = 250) {
        this.onShow();
        this.width = width;
        this.widthAreaUsed = 1; // Indicate to the calcualteCssStyles function, that we need to set this value
        this.calcualteCssStyles();
        this.areaNotification.style.display = 'inline-block';

        //this.mainService.$rootScope.$broadcast('AreaNotification.Show');
        this.onShowed();
    }

    /* Override */
    onHide(): boolean {
        return true;
    }

    /* Override */
    onShow() {
    }

    /* Override */
    onShowed() {
    }

    // #endregion

    // #region Private Methods

    private calcualteCssStyles() {
        this.areaNotification.style.position = 'absolute';
        this.areaNotification.style.top = '0';
        this.areaNotification.style.height = '100%';
        this.areaNotification.style.backgroundColor = this.backgroundColor;
        this.areaNotification.style.borderLeft = '2px solid gray';
        this.areaNotification.style.width = this.width + 'px';
        //this.areaNotification.style.left = this.mainService.browserWindowService.browserWindow.innerWidth - this.width + 'px';

        if (this.widthAreaUsed !== 0) {
            this.widthAreaUsed = this.width;
        }
    }

    // #endregion
}
