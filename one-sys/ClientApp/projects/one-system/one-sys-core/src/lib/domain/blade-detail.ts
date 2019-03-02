import { MainService } from '../service/main/main.service';
import { BladeData } from './blade-data';

export class BladeDetail<T> extends BladeData<T>   {
  // #region Constructors

  constructor(mainService: MainService, path: string, title: string, subtitle: string = '', width: number = 300) {
    super(mainService, path, title, subtitle, width);

    this.commandNewText = 'neu';
    this.commandSaveText = 'speichern';
    this.commandDeleteText = 'löschen';
    this.commandCancelText = 'abbrechen';
  }

  // #endregion

  // #region Properties

  item: T = <T>{};

  // #endregion

  // #region Public Methods

  onCommandCancel(): void {
    this.close();
  }

  // #endregion

  // #region Private Methods

  // #endregion
}
