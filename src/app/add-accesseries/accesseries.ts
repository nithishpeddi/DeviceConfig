import { Component, OnInit } from '@angular/core';

@Component({
 
  templateUrl: './accesseries.html',
  styleUrls: ['./accesseries.css']
})
export class AccesseriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
open(panel) {
   panel.classList.remove("collapse");
}
}
