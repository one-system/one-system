//import { MainService } from '../../../service/main/main.service';
import { Tile } from '../tile/tile';

export class AppboardEntry extends Tile {
    // #region Properties

    //mainService: MainService

    // #endregion

    // #region Constructors

    constructor(public override title: string, public routerPath: string, public override subTitle: string = '', public iconClass: string = '', public iconColor: string = '') {
        super(title, routerPath);
    }

    // #endregion

    // #region Public Methods

    // #endregion
}
