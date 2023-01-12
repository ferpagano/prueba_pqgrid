import { Component, Input, OnInit, ElementRef } from '@angular/core';

import pq from 'pqgrid';

//import localization file
import 'pqgrid/localize/pq-localize-en.js';

@Component({
  selector: 'pqgrid2',
  template: `<div></div>`,
  //styles: [`h1 { font-family: Lato; }`]
})
export class Pqgrid2Component implements OnInit {
  @Input() options: object;
  constructor(public el: ElementRef) { this.options = {}}
  ngOnInit() {
    //debugger;
    pq.grid(this.el.nativeElement.children[0], this.options);
  }
}
