import { Component, OnInit } from '@angular/core';

import { AppService } from '@one-system/one-sys-core';

@Component({
  selector: 'ospa-sidebar-favorite',
  templateUrl: './sidebar-favorite.component.html',
  styleUrls: ['./sidebar-favorite.component.css']
})
export class SidebarFavoriteComponent implements OnInit {
  constructor(public appService: AppService) { }

  ngOnInit() {
  }
}
