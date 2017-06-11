import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],

})
export class DashComponent {



  constructor() { }
  setSaving(element, text) {
    element.textContent = text;
    element.disabled = true;
  }
  ngOnInit() {



  }
}


