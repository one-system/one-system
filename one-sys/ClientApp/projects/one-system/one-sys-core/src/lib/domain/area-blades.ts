//import { MainService } from '../service/main/main.service';
import { UserControlBase } from './base/user-control-base';
import { Blade } from './blade/blade';
import { BladeAddArgs } from './blade/blade-add-args';

export class AreaBlades extends UserControlBase {
    // #region Properties

    private portalScroll: HTMLElement;

    private addBladeListener: () => void;
    private areaNotificationShowListener: () => void;
    private areaNotificationHideListener: () => void;

    blades: Array<Blade> = new Array<Blade>();

    // #endregion

    // #region Constructors

    // mainService: MainService
    constructor() {
        super();

        //this.portalScroll = this.mainService.browserWindowService.browserWindow.document.getElementById('apa-portal-scroll');

        this.setupAddBladeListener();
        this.setupShowHideNotificationAreaListener();
        //this.browserWindow.setupWindowResizeListener(() => { this.setPortalScrollCss(); });
    }

    // #endregion

    // #region Public Methods

    raiseBladeOnActivateEvent(args: BladeAddArgs) {
        let isEventRaised: boolean = false;

        this.blades.forEach((blade) => {
            if (blade.path.toLowerCase() === args.path.toLowerCase()) {
                // Raise event onActivate
                blade.onActivate();
                isEventRaised = true;
                return;
            }
        });
    }

    raiseAddBladeEvent(args: BladeAddArgs) {
        let isBladeAlreadyShown: boolean = false;
        this.blades.forEach((blade) => {
            if (blade.path.toLowerCase() === args.path.toLowerCase()) {
                // Blade is already shown, just activate it again
                blade.onActivate();
                isBladeAlreadyShown = true;
                return;
            }
        });

        if (!isBladeAlreadyShown) {
            // Add the blade, since it is not yet shown
            //this.mainService.$rootScope.$broadcast('AreaBlades.AddBlade', args);
        }
    }

    setFirstBlade(path: string): Blade | void {
        this.clearAll();
        this.hidePanorama();
        return this.addBlade(path);
    }

    addBlade(path: string, senderPath: string = ''): Blade | void {
        if (path == null) { return; }
        if (senderPath == null) { return; }
        let portalcontent: HTMLElement = null;
        //this.mainService.$analytics.pageTrack(path.toLowerCase());

        path = path.toLowerCase();
        senderPath = senderPath.toLowerCase();

        // #region Verify

        if (path === undefined || path === '') { return; }

        //if (this.mainService.browserWindowService.browserWindow !== undefined) {
        //    if (this.mainService.browserWindowService.browserWindow.document === undefined) {
        //        throw new Error('[AreaBlades] \'this.browserWindowService.browserWindow.document\' undefined.');
        //    }

        //    portalcontent = this.mainService.browserWindowService.browserWindow.document.getElementById('apa-portal-scroll');
        //    if (portalcontent === null) {
        //        throw new Error('[AreaBlades] HTML element with ID [apa-portal-scroll] not found. Maybe it is to early to call function \'BladeArea.addBlade\'.');
        //    }
        //}

        // #endregion

        // #region Clear all children of the parent path

        this.clearChild(senderPath);

        // #endregion

        // #region Make sure the blade is not yet show

        this.blades.forEach((blade) => {
            // we do not distinguish between lower and upper case path name
            if (blade.comparePaths(blade.path, path)) {
                throw new Error('[AreaBlades] path: \'' + path + '\' will not be added. It is already added.');
            }
        });

        // #endregion

        // #region Show the blade

        //let blade = new Blade(this.mainService, path, '');
        //this.blades.push(blade);

        // #endregion

        // #region Position the blade

        //if (this.mainService.browserWindowService.browserWindow !== undefined) {
        //    this.mainService.browserWindowService.browserWindow.setTimeout(() => {
        //        let azureportalblades = this.mainService.browserWindowService.browserWindow.document.getElementsByClassName('azureportalblade');

        //        let i = this.blades.length - 1;

        //        // HACK: Sometime azureportalblades[i].offsetLeft is undefined.
        //        //       So now if it is, the user has to scroll on its own.
        //        if (azureportalblades[i] !== undefined && (<any>azureportalblades[i]).offsetLeft !== undefined) {
        //            let sl = (<any>azureportalblades[i]).offsetLeft - 30;
        //            portalcontent.scrollLeft = sl;
        //        }
        //    }, 250);
        //}

        // #endregion

        //return blade;
        return null;
    }

    clearAll(): void {
        this.blades.length = 0;
        this.showPanoramaIfNoBlades();
    }

    clearPath(path: string): void {
        // we do not distinguish between lower and upper case path name
        path = path.toLowerCase();

        let isremoved = this.blades.some((blade, index) => {
            if (blade.comparePaths(blade.path, path)) {
                this.blades.length = index;
                return true;
            }
        });

        //if (!isremoved && this.mainService.areaNotification.path === path) {
        //    this.mainService.areaNotification.hide();
        //    isremoved = true;
        //}

        if (!isremoved) {
            throw new Error('[AreaBlades.clearPath] path: \'' + path + '\' could not be removed, since path not found in bladeUrls.');
        }

        this.showPanoramaIfNoBlades();
    }

    clearLevel(level: number) {
        if (this.blades.length < level) {
            throw new Error('[AreaBlades] level: \'' + level + '\' could not be cleard, since only \'' + this.blades.length + '\' available.');
        }

        if (level === 0) { level = 1; }
        this.blades.length = level - 1;
        this.showPanoramaIfNoBlades();
    }

    clearLastLevel() {
        this.clearLevel(this.blades.length);
        this.showPanoramaIfNoBlades();
    }

    clearChild(path: string): void {
        path = path.toLowerCase();

        if (path === '') {
            return;
        }
        let isremoved = this.blades.some((blade, index) => {
            // we do not distinguish between lower and upper case path name
            if (blade.comparePaths(blade.path, path)) {
                this.blades.length = index + 1;
                return true;
            }
        });
        if (!isremoved) {
            throw new Error('[AreaBlades.clearChild] path: \'' + path + '\' could not be removed, since path not found in bladeUrls.');
        }
    }

    showPanoramaIfNoBlades() {
        //if (this.blades.length === 0) {
        //    if (this.mainService.panorama !== undefined) {
        //        {
        //            this.mainService.panorama.isVisible = true;
        //        }
        //    }
        //}
    }

    hidePanorama() {
        //if (this.mainService.panorama !== undefined) {
        //    this.mainService.panorama.isVisible = false;
        //}
    }

    /** We need to call this when AreaBlades is no longer used, otherwise the listener does not get removed. */
    close() {
        // Unregister Listeners
        this.addBladeListener();
        this.areaNotificationShowListener();
        this.areaNotificationHideListener();
    }

    // #endregion

    // #region Private Methods

    private setPortalScrollCss() {
        //this.portalScroll.style.marginRight = this.mainService.areaNotification.widthAreaUsed + 'px';
    }

    private setupShowHideNotificationAreaListener() {
        //this.areaNotificationShowListener = this.mainService.$rootScope.$on('AreaNotification.Show', (event: ng.IAngularEvent, args: IAddBladeEventArgs) => {
        //    this.setPortalScrollCss();
        //});

        //this.areaNotificationHideListener = this.mainService.$rootScope.$on('AreaNotification.Hide', (event: ng.IAngularEvent, args: IAddBladeEventArgs) => {
        //    this.setPortalScrollCss();
        //});
    }

    private setupAddBladeListener() {
        //this.addBladeListener = this.mainService.$rootScope.$on('AreaBlades.AddBlade', (event: ng.IAngularEvent, args: IAddBladeEventArgs) => {
        //    this.addBlade(args.path, args.pathSender);
        //});
    }

    // #endregion
}
