import { Component, OnInit } from '@angular/core';
import {SendDataService} from '../Services/send-data.service';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {

  constructor(private _getData:SendDataService) { 
  
    this._getData.pushDat.subscribe((data)=> this._populateData(data))
    
  }

_populateData(f)
{
  console.log(f);
}
  ngOnInit() {
  }

}
