import { Component, OnInit } from '@angular/core';
import { Project } from '../Add-Project/addproject.interface';
import { SendDataService } from '../Services/send-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './addconfig.html',
  styleUrls: ['./addconfig.scss']
})
export class ConfigComponent implements OnInit {
  
  Project = {
    projectId: '',
    projectName: '',
    projectDetails: '',
    phase: '',
    milestone: '',
    deviceName: '',
    id: '',
    name: '',
    components: '',
    units: '',
    subsystem: '',
    assignedTo: '',
    testTeam: '',
    location: '',
    priority: '',
    targetDate: '',
    shippedDate: '',
    unitsShipped: '',
    prvisioned: '',
    smoketest: '',
    notes: ''


  }
  constructor(private _addProjectService: SendDataService, private _route: Router) { }
  onSubmit(f) {
    console.log(f)
    this._addProjectService.onSubscribeData(f);
  }
  onSuccess(data) {
console.log(data);
  }
  ngOnInit() {
  }

}
