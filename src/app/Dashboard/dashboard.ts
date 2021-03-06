import { Component, OnInit } from '@angular/core';
import { SendDataService } from '../Services/send-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {

  constructor(private SendDataService:SendDataService) { }

  ngOnInit() {
    this.SendDataService.onReadData();

  }

}
