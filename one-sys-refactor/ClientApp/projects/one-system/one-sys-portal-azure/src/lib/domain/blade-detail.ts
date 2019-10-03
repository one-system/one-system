import { WindowRef } from '../services/windowref';

import { BladeData } from './blade-data';
import { AreaBlades } from './area-blades';

export class BladeDetail<T> extends BladeData<T> {
  // #region Constructor

  constructor(public areaBlades: AreaBlades, public windowRef: WindowRef, path: string, title: string, subtitle: string = '', width: number = 200) { // $scope: angular.IScope, 
    super(areaBlades, windowRef, path, title, subtitle, width); // $scope, 

    this.commandNewText = 'neu';
    this.commandSaveText = 'speichern';
    this.commandDeleteText = 'lÃƒÂ¶schen';
    this.commandCancelText = 'abbrechen';
  }

  // #endregion

  // #region Properties

  item: T = <T>{};

  // #endregion

  // #region Methods

  onCommandCancel(): void {
    this.close();
  }

  // #endregion
}
