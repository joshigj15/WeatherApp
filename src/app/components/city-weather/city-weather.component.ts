import { Component, OnInit } from '@angular/core';
import {ApiservService} from './../../services/apiserv.service';
import {Router} from '@angular/router'
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { OrderrByPipe } from './../../orderby.pipe';
@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css'],
  
})
export class CityWeatherComponent implements OnInit {

  weatherData;
  isDesc: boolean = false;
  column: string = 'temp';
  direction: number;
  constructor(private _apiServ:ApiservService,private _router:Router,private spinnerService: Ng4LoadingSpinnerService) { 
    // this.weatherData = {};
    this.getCurrentWeather();
    this.sort('temp');
  }

  ngOnInit() {
    
  }

  // Declare local variable

// Change sort function to this: 
sort(property){
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
}

  getCurrentWeather(){
    console.log("getCurrentWeather");
    let id =  '524901,703448,2643743,1851632';
    this.spinnerService.show();    
    this._apiServ.getCurrentWeatherData(id).subscribe(data => {
      
  
  for(let count=0;count<data.list.length;count++){
    data.list[count].temp = data.list[count].main.temp;
  }
  this.weatherData = data.list;
  console.log("getCurrentWeatherData api", this.weatherData);
  this.spinnerService.hide();
     
    });
  }

  getFiveDayForeCast(data){
    console.log("getFiveDayForeCast",data.id);
    this.spinnerService.show(); 
    this._apiServ.getForecastData(data.id).subscribe(data => {
    console.log("getFiveDayForeCast api", data);
    this._apiServ.setData(data);
    this.spinnerService.hide();
     this._router.navigate(['/forecast']);
    });
  }
 

}
