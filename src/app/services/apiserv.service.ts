import { Injectable } from '@angular/core';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Headers, Http, RequestOptions } from '@angular/http';

const API_KEY = 'fbeab45838fb3c3535d1b74847ce730a';
@Injectable()
export class ApiservService {

  
  domain = " http://api.openweathermap.org/";
  masterObj:any;
  constructor(private _http: Http) {
    this.masterObj = {};

  }
  // http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&APPID=fbeab45838fb3c3535d1b74847ce730a


  getCurrentWeatherData(id){
    return this._http.get(this.domain + 'data/2.5/group?id='+id+'&units=metric&APPID='+API_KEY).map(res => res.json());
  }

  getForecastData(id){
    return this._http.get(this.domain + 'data/2.5/forecast?id='+id+'&units=metric&APPID='+API_KEY).map(res => res.json());
  }

  setData(data){
    console.log("setData",data);
    this.masterObj = data;
  }

  getData(){
    return this.masterObj;
  }



}
