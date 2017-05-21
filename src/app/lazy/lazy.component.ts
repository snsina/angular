import { Component, OnInit } from '@angular/core';

@Component({
//  templateUrl: './lazy.component.html',
  template: `
  <h1>
    Here is Lazy Component
  </h1>
  `,
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
