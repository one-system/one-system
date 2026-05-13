import { RouterOutlet } from './router-outlet';

describe('RouterOutlet', () => {
  //#region Public Static Methods

  it('static: convertUrlPath()', () => {
    // Act
    let result = RouterOutlet.convertUrlPath('/(blade1:bladegrid1//blade0:bladenav0)');

    // Log
    console.log(result);

    // Assert
    expect(result.length).toBe(2);
    expect(result[0].routerPath).toBe('bladegrid1');
    expect(result[0].outletName).toBe('blade1');
    expect(result[1].routerPath).toBe('bladenav0');
    expect(result[1].outletName).toBe('blade0');
  });

  //#endregion
});
