import { WindowRef } from '../services/windowref';

import { BladeData } from './blade-data';
import { AreaBlades } from './area-blades';

export class BladeGrid extends BladeData<any> {
  // #region Constructor

  constructor(public areaBlades: AreaBlades, public windowRef: WindowRef, path: string, title: string, subtitle: string = '', width: number = 200) { // $scope: angular.IScope, 
    super(areaBlades, windowRef, path, title, subtitle, width); // $scope, 
  }

  // #endregion

  // #region Properties

  blade: BladeGrid;

  // #endregion

  // #region Methods

  //loadItems(func: () => any | angular.IPromise<any> | Promise<any>): void {
  //    this.onLoadItems();

  //    func().then((data: any) => {
  //        this.items = data;
  //        this.onLoadedItems();
  //    }).catch((exception: angularportalazure.Exception) => {
  //        this.setStatusBarException(exception);
  //    });
  //}

  // #region Filter

  onFilter(actual: Object, expected: string): boolean {
    // #region Documentation

    // > onFilter will be called for each item in an array
    // > If the item is an native type (string, number), the filter will be called with the native type in the parameter 'actual'
    // > If the item is an object, the filter will be called with each property of the object in the parameter 'actual'
    // > If the item is an object, the filter will also be called with the object in the parameter 'actual'

    // #endregion

    // #region Helper functions

    // Implementation detail:
    // > We implemented the following functions with in-line-functions, since onFilter is not called within the scope of a class (this. not working).

    // Function to convert 'number' to 'string'
    let convertToString = (value: number): string => {
      return value + '';   // convert to string, so the next statements will process the value as a string
    };

    // Function which figures out, if the 'expected' value is found in the 'actual' value
    let valueFound = (actual: string, expected: string): void => {

      expectedSplitted.forEach((expectedItem, index): void => {
        if (actual.toLowerCase().indexOf(expectedItem) > -1) {
          expectedSplitted[index] = '';  // expected has been found, initialize it now
        }
      });
    };

    // Function to process an object
    let processObject = (actual: object): void => {
      for (let actualProperty in actual) {
        if (actual.hasOwnProperty(actualProperty)) {
          let actualValue = actual[actualProperty];

          if (typeof actual === 'number') {
            actualValue = convertToString(<number>actual);
          }

          if (typeof actualValue === 'string') {
            if (actualValue.indexOf('object:') > -1) { continue; }
            valueFound(actualValue, expected);
          }
        } else {
          // Process inherited properties
          processObject(actual[actualProperty]);
        }
      }
    };

    // #endregion

    // #region Initialize

    // Prepare 'expected' value
    expected = expected.toLowerCase();

    // Split the search string into its parts if separated by blanks
    let expectedSplitted = expected.split(' ');

    // #endregion

    // #region Process depending on type

    // Process property, typeof 'object'
    if (typeof actual === 'object') {
      processObject(actual);
    }

    // Process property, typeof 'number'
    if (typeof actual === 'number') {
      actual = convertToString(<number>actual);
    }

    // Process property, typeof 'string'
    if (typeof actual === 'string') {
      valueFound(<string>actual, expected);
    }

    // #endregion

    // #region Verify if all expected has been found

    let foundCount = 0;

    expectedSplitted.forEach((expectedItem): void => {
      if (expectedItem === '') {  // all expectedSplitted.items which have been found, are initialized to '' (see above)
        foundCount++;
      }
    });

    // #endregion

    // #region Return result

    if (foundCount === expectedSplitted.length) {
      return true;
    } else {
      return false;
    }

    // #endregion
  }

  // #endregion

  // #endregion
}
