import { Component, OnInit } from '@angular/core';

import { AppService } from '@one-system/one-sys-core';

@Component({
  selector: 'ospa-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(public appService: AppService) { }

  ngOnInit() {
    setTimeout(() => { this.appService.config.isShowSplashscreen = false; }, 2000)
  }
}
