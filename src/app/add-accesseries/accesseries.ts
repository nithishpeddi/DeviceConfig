import { Component, OnInit } from '@angular/core';

@Component({
 
  templateUrl: './accesseries.html',

})
export class AccesseriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
open(panel) {
   panel.classList.remove("collapse");
}
}
