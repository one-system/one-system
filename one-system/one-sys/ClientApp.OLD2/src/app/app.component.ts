import { Component } from '@angular/core';

import { AreaBlades } from '@one-system/one-sys-portal-azure';
import { PortalService } from '@one-system/one-sys-portal-azure';
import { Tile } from '@one-system/one-sys-portal-azure';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'one-sys';
  constructor(portalService: PortalService, areaBlades: AreaBlades) {
    portalService.panorama.title = 'AMMS';
    portalService.panorama.avatarMenu.userAccount.firstName = 'Harry';
    portalService.panorama.avatarMenu.userAccount.lastName = 'Pfleger';
    portalService.panorama.avatarMenu.userAccount.emailAddress = 'harry@ardimedia.com';
    portalService.panorama.startboard.tiles.addTile(new Tile('Tile 1', 'bladenav1', areaBlades));
    portalService.panorama.startboard.tiles.addTile(new Tile('Tile 2', 'bladegrid1', areaBlades));
    portalService.panorama.startboard.tiles.addTile(new Tile('Tile 3', 'bladedetail1', areaBlades));
  }
}
