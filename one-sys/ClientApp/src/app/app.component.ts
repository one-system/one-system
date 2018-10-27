import { Component } from '@angular/core';
import { AppService } from '@one-system/one-sys-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'one-sys';

  constructor(public appService: AppService) { }

  ngOnInit() {
    console.log('AppComponent:');
    console.log(this.appService);
  }
}
