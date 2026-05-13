import { WindowRef } from '../services/windowref';
import { AreaBlades } from './area-blades';
import { UserControlBase } from './user-control-base';

export class Blade extends UserControlBase {
  // #region Constructor

  constructor(public areaBlades: AreaBlades, public windowRef: WindowRef, routerPath: string, title: string, subtitle: string = '', width: number = 200) {
    super(windowRef);

    this.blade = this;
    this.routerPath = routerPath;
    this.title = title;
    this.subTitle = subtitle;
    this.width.width = width + 'px';
    this.widthStackLayout.width = width - 50 + 'px';  // 50 = padding (left and right)

    if (!areaBlades) { throw new Error('[one-sys:Blade.constructor] constructor parameter \'areaBlades\' must be provided.'); }
    if (!routerPath) { throw new Error('[one-sys:Blade.constructor] constructor parameter \'routerPath\' must be a string.'); }
    if (!title && title !== '') { throw new Error('[one-sys:Blade.constructor] constructor parameter \'title\' must be a string when provided.'); }
    if (!subtitle && subtitle !== '') { throw new Error('[one-sys:Blade.constructor] constructor parameter \'subtitle\' must be a string when provided.'); }
    if (!width && width !== 0) { throw new Error('[one-sys:Blade.constructor] constructor parameter \'width\' must be a number when provided.'); }

    if (width < 50) { throw new Error('[one-sys:Blade.constructor] constructor parameter \'width\' must be at least 50.'); }

    // Set 'this.portalService.areaBlades.blades[index]' to 'this'
    //     'this.portalService.areaBlades.blades[index]' was generated during AddBlade
    //this.portalService.areaBlades.blades.forEach((blade, index) => {
    //  if (blade.path != null && this.path != null && blade.path.toLowerCase() === this.path.toLowerCase()) {
    //    //this.portalService.areaBlades.blades[index] = this;
    //  }
    //});

    this.setupWindowResizeListener(() => { this.setBladeHeights(); });
    this.setBladeHeights();
  }

  // #endregion

  // #region Properties

  bladeId: string;
  bladeOutletName: string;
  isMaximize: boolean = false;
  isNav: boolean = false;
  isNavGrid: boolean = false;
  isInnerHtml: boolean = true;

  blade: Blade;

  visibility: string = 'collapse';

  bladeContentHeight: number;
  bladeContentHeightInner: number;

  title: string = '';
  subTitle: string = '';
  width = { 'width': '0' };
  widthStackLayout = { 'width': '50px' };

  formblade: any;

  // #region routerPath

  private _routerPath: string;
  get routerPath(): string {
    return this._routerPath;
  }
  set routerPath(newRouterPath: string) {
    if (newRouterPath == null) { return; }
    this._routerPath = newRouterPath.toLowerCase();
  }

  // #endregion

  // #endregion

  // #region Commands

  isCommandMore: boolean = false;

  isCommandBrowse: boolean = false;
  commandBrowse: () => void = () => { this.onCommandBrowse(); };
  commandBrowseText: string = '';

  isCommandCancel: boolean = false;
  commandCancel: () => void = () => { this.onCommandCancel(); };
  commandCancelText: string = '';

  isCommandCopy: boolean = false;
  isCommandCopyEnabled: boolean = true;
  commandCopy: () => void = () => { this.onCommandCopy(); };
  commandCopyText: string = '';

  isCommandDelete: boolean = false;
  isCommandDeleteEnabled: boolean = true;
  commandDelete: () => void = () => { this.onCommandDelete(); };
  commandDeleteText: string = '';

  isCommandDocument: boolean = false;
  commandDocument: () => void = () => { this.onCommandDocument(); };
  commandDocumentText: string = '';

  isCommandDocument2: boolean = false;
  commandDocument2: () => void = () => { this.onCommandDocument2(); };
  commandDocument2Text: string = '';

  isCommandDocument3: boolean = false;
  commandDocument3: () => void = () => { this.onCommandDocument3(); };
  commandDocument3Text: string = '';

  isCommandDocument4: boolean = false;
  commandDocument4: () => void = () => { this.onCommandDocument4(); };
  commandDocument4Text: string = '';

  isCommandDocument5: boolean = false;
  commandDocument5: () => void = () => { this.onCommandDocument5(); };
  commandDocument5Text: string = '';

  isCommandNew: boolean = false;
  commandNew: () => void = () => { this.onCommandNew(); };
  commandNewText: string = '';

  isCommandOrder: boolean = false;
  commandOrder: () => void = () => { this.onCommandOrder(); };
  commandOrderText: string = '';

  isCommandRestart: boolean = false;
  commandRestart: () => void = () => { this.onCommandRestart(); };
  commandRestartText: string = '';

  isCommandSave: boolean = false;
  isCommandSaveEnabled: boolean = true;
  commandSave: () => void = () => { this.onCommandSave(); };
  commandSaveText: string = '';

  isCommandSearch: boolean = false;
  commandSearch: () => void = () => { this.onCommandSearch(); };
  commandSearchText: string = '';

  isCommandStart: boolean = false;
  commandStart: () => void = () => { this.onCommandStart(); };
  commandStartText: string = '';

  isCommandStop: boolean = false;
  commandStop: () => void = () => { this.onCommandStop(); };
  commandStopText: string = '';

  isCommandSwap: boolean = false;
  commandSwap: () => void = () => { this.onCommandSwap(); };
  commandSwapText: string = '';

  isCommandExcel: boolean = false;
  commandExcel: () => void = () => { this.onCommandExcel(); };
  commandExcelText: string = '';

  // #endregion

  // #region Public Methods

  activate(): void {
    this.onActivate();
    this.onActivated();
  }

  close() {
    // Check if blade should be closed.
    if (!this.onClose(this.bladeOutletName)) { return; }

    // Remove (close) the blade
    if (this.areaBlades !== undefined) {
      this.areaBlades.clearPath(this.bladeOutletName);
    } else {
      throw new Error(`[one-sys:Blade.close] bladeOutletName: '${this.bladeOutletName}' could not be removed, because 'this.portalService.areaBlades' is undefined.`);
    }
  }

  /** Override: Return false, if blade should not be closed. */
  onClose(bladeOutletName: string): boolean {
    return true;
  }

  navigateTo(routerPath: string) {
    // Check if navigation should occur.
    if (!this.onNavigateTo(routerPath)) { return; }

    if (routerPath === '') { return; }
    this.areaBlades.addBlade(routerPath);
    this.onNavigatedTo(routerPath);
  }

  /** Override: Return false, if navigation should not occur. */
  onNavigateTo(routerPath: any): boolean {
    return true;
  }

  /** Override: Navigation post processing */
  onNavigatedTo(routerPath: any): void {
  }

  setBladeOutletName(urlPath: string) {
    this.bladeOutletName = this.urlExtracFirstBladeOutletName(urlPath);
  }

  // #endregion

  // #region Public Commands Methods

  onCommandBrowse(): void {
    throw new Error('[angularportalazure.Blade] \'onCommandBrowse\' is an abstract function. Define one in the derived class.');
  }

  onCommandCancel(): void {
    throw new Error('[angularportalazure.Blade] \'onCommandCancel\' is an abstract function. Define one in the derived class.');
  }

  onCommandCopy(): void {
    throw new Error('[angularportalazure.Blade] \'onCommandCopy\' is an abstract function. Define one in the derived class.');
  }

  onCommandDelete(): void {
    throw new Error('[angularportalazure.Blade] \'onCommandDelete\' is an abstract function. Define one in the derived class.');
  }

  onCommandDocument(): void {
    throw new Error('[angularportalazure.Blade] \'onCommandDocument\' is an abstract function. Define one in the derived class.');
  }

  onCommandDocument2(): void {
    throw new Error('[angularportalazure.Blade] \'onCommandDocument2\' is an abstract function. Define one in the derived class.');
  }

  onCommandDocument3(): void {
    throw new Error('[angularportalazure.Blade] \'onCommandDocument3\' is an abstract function. Define one in the derived class.');
  }

  onCommandDocument4(): void {
    throw new Error('[angularportalazure.Blade] \'onCommandDocument4\' is an abstract function. Define one in the derived class.');
  }

  onCommandDocument5(): void {
    throw new Error('[angularportalazure.Blade] \'onCommandDocument5\' is an abstract function. Define one in the derived class.');
  }

  onCommandNew(): void {
    throw new Error('[angularportalazure.Blade] \'onCommandNew\' is an abstract function. Define one in the derived class.');
  }

  onCommandOrder(): void {
    throw new Error('[angularportalazure.Blade] \'onCommandOrder\' is an abstract function. Define one in the derived class.');
  }

  onCommandRestart(): void {
    throw new Error('[angularportalazure.Blade] \'onCommandRestart\' is an abstract function. Define one in the derived class.');
  }

  onCommandSave(): void {
    throw new Error('[angularportalazure.Blade] \'onCommandSave\' is an abstract function. Define one in the derived class.');
  }

  onCommandSearch(): void {
    throw new Error('[angularportalazure.Blade] \'onCommandSearch\' is an abstract function. Define one in the derived class.');
  }

  onCommandStart(): void {
    throw new Error('[angularportalazure.Blade] \'onCommandStart\' is an abstract function. Define one in the derived class.');
  }

  onCommandStop(): void {
    throw new Error('[angularportalazure.Blade] \'onCommandStop\' is an abstract function. Define one in the derived class.');
  }

  onCommandSwap(): void {
    throw new Error('[angularportalazure.Blade] \'onCommandSwap\' is an abstract function. Define one in the derived class.');
  }

  onCommandExcel(): void {
    throw new Error('[angularportalazure.Blade] \'onCommandExcel\' is an abstract function. Define one in the derived class.');
  }

  // #endregion

  // #region Private Methods

  private setBladeHeights(): void {
    this.bladeContentHeight = this.windowRef.nativeWindow.innerHeight - 40 - 125; // 40 = topbar, 125 = blade header
    this.bladeContentHeightInner = this.bladeContentHeight - 50 - 3; // 50 = padding (top and bottom), somehow we miss 3px

    // this.portalService.$timeout(() => {
    // }, 50);
  }

  private urlExtracFirstBladeOutletName(urlPath: string): string {
    // Extract bladeOutlet from urlPath, e.g. /(blade1:bladegrid1//blade0:bladenav1) = blade1
    let regex = /(\(|\/\/)(.*?):/g
    let match = regex.exec(urlPath);
    if (match.length !== 3) {
      console.log(match);
      throw new Error(`[Blade.urlExtracFirstBladeOutlet] Could not extract bladeOutletName from: ${urlPath} - see regex.match in console.log`);
    }
    return match[2];
  }

  // #endregion
}
