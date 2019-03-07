export class Helper {
  // #region Properties

  // #endregion

  // #region Constructors

  constructor() {
  }

  // #endregion

  // #region Public Methods

  isNumberUndefinedNullOr0(value: number): boolean {
    if (value && value > 0) {
      return false;
    } else {
      return true;
    }
  }

  isObjectNullUndefinedOrEmpty(value: object): boolean {
    if (value == null) { return true; }
    if (value == undefined) { return true; }
    if (value && Object.keys(value).length > 0) {
      return false;
    } else {
      return true;
    }
  }

  isStringNullOrEmpty(value: string): boolean {
    if (value && value.replace(' ', '').length > 0) {
      return false;
    } else {
      return true;
    }
  }

  getRandomString(length: number = 20) {
    return 'a' + Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).replace('.', '').replace('(e+', '').replace(')', '').slice(1);
  }

  // #endregion
}
