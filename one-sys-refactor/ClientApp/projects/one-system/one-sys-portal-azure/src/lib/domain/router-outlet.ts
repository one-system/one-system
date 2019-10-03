export class RouterOutlet {
  // #region Constructor

  constructor(public routerPath: string, public outletName: string) {
  }

  // #endregion

  //#region Static Methods

  /**
   * Converts an urlPath (angular router path) to a RouterOutlet array.
   * @param urlPath
   */
  static convertUrlPath(urlPath: string): RouterOutlet[] {
    // Return empty array, if urlPath = /
    if (urlPath === '/' || urlPath === '' || urlPath === undefined) { return []; }

    // Extract routerPathOutlets from urlPath, e.g. /(blade1:bladegrid1//blade0:bladenav1) = blade1,bladegrid1 and blade0,bladenav1
    let routerOutlets: RouterOutlet[] = [];
    let regex = /(\/\(|)(.*?):(.*?)(\/\/|\))/gm
    let match;

    while (match = regex.exec(urlPath)) {
      routerOutlets.push({ routerPath: match[3], outletName: match[2] });
    }

    return routerOutlets;
  }

  //#endregion
}
