import { AreaBlades } from './area-blades';
import { TileSizes } from './tile-sizes';

export class Tile {
  // #region Constructor

  constructor(title: string, bladePath: string, private areaBlades: AreaBlades) {
    this.title = title;
    this.bladePath = bladePath;
    this.tileSize = TileSizes.normal;
  }

  // #endregion

  // #region Properties

  title: string;
  subTitle: string;

  // #region bladePath --> SHOULD BE routerPath

  get bladePath(): string {
    return this._bladePath;
  }
  // For the moment we do not distinguish between lower and upper case path name
  set bladePath(newBladePath: string) {
    this._bladePath = newBladePath.toLowerCase();
  }
  private _bladePath: string;

  // #endregion

  tileSize: TileSizes;
  size: string; // CSS style class name - refactoring: rename to cssClass

  left: string; // Obsolete, use leftN
  top: string; // Obsolete, use topN
  leftN: string; // left position (CSS) - during refactoring, rename to left
  topN: string; // top position (CSS) - during refactoring, rename to top

  // #endregion

  // #region Methods

  clicked() {
    this.areaBlades.addFirstBlade(this.bladePath);
  }

  // #endregion
}
