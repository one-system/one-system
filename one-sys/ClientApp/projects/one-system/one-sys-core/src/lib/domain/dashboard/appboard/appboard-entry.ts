import { MainService } from '../../../service/main/main.service';
import { Tile } from '../tile/tile';

export class AppboardEntry extends Tile {
    // #region Constructors

    constructor(public title: string, public routerPath: string, public subTitle: string = '', public iconClass: string = '', public iconColor: string = '') {
        super(null, title, routerPath);
    }

    // #endregion

    // #region Properties

    mainService: MainService

    // #endregion

    // #region Public Methods

    // #endregion
}
