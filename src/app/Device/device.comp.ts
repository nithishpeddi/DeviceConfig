import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from './device.service';
@Component({

  templateUrl: './device.html',
  //   styleUrls: ['./subdevice.css'],

})
export class DeviceComponent {
  project: any;
  errorMessage: string;
  constructor(private _router: Router, private _ProjectService: ProjectService) { }


  Create() {

    this._ProjectService
      .create(this.project)
      .subscribe(createdProject => this._router.navigate([`/project/view/${createdProject._id}`]),
      error => this.errorMessage = error);
  }
}