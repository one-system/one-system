import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app1-app1',
  template: `
    <p>
      app1 works!
    </p>
    <osc-one-sys-core></osc-one-sys-core>
    <ospa-one-sys-portal-azure></ospa-one-sys-portal-azure>
    <p>
      app1 works!
    </p>
  `,
  styles: []
})
export class App1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
