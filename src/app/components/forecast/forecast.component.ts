import { Component, OnInit } from '@angular/core';
import {ApiservService} from './../../services/apiserv.service';


@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  foreCastData;
  constructor(private _apiServ:ApiservService) { }

  ngOnInit() {
    this.getForeCastData();
  }

  getForeCastData(){
    this.foreCastData = this._apiServ.getData();
    console.log("this.foreCastData",this.foreCastData);
  }
}
