import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app2-app2',
  template: `
    <p>
      app2 works!
    </p>
    <osc-one-sys-core></osc-one-sys-core>
    <ospa-one-sys-portal-azure></ospa-one-sys-portal-azure>
    <p>
      app2 works!
    </p>
  `,
  styles: []
})
export class App2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
