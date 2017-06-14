import { Component, OnInit } from '@angular/core';
import {SendDataService} from '../Services/send-data.service';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.html',
  styleUrls: ['./view-project.scss']
})
export class ViewProjectComponent implements OnInit {
  _mapData = [];
  constructor(private _getData:SendDataService) { 
  
    this._getData.pushDat.subscribe((data)=> this._populateData(data))
    
  }

_populateData(f)
{
  console.log(f);
}
  ngOnInit() {
    this._getData.read(null).subscribe((response)=>{
    for(let res in response)
      this._mapData.push(response[res]);

    })
  }

}
