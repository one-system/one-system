import { Component, OnInit } from '@angular/core';

import { MainOscService } from '@one-system/one-sys-core';

@Component({
    selector: 'ospa-sidebar-favorite',
    templateUrl: './sidebar-favorite.component.html',
    styleUrls: ['./sidebar-favorite.component.scss']
})
export class SidebarFavoriteComponent implements OnInit {
    constructor(public mainOscService: MainOscService) {
    }

    ngOnInit() {
    }
}
