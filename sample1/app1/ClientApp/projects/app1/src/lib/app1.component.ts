import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app1-app1',
  template: `
    <p>
      app1 works!
    </p>
    <osc-onesys-core></osc-onesys-core>
    <ospa-onesys-portal-azure></ospa-onesys-portal-azure>
  `,
  styles: []
})
export class App1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
