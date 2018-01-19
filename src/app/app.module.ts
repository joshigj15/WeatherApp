import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { OrderrByPipe } from './orderby.pipe';

import { AppRoutingModule } from './app-routing.module';

import {ApiservService} from './services/apiserv.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CityWeatherComponent } from './components/city-weather/city-weather.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { ErrorComponent } from './components/error/error.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CityWeatherComponent,
    ForecastComponent,
    ErrorComponent,
    OrderrByPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [ApiservService],
  bootstrap: [AppComponent]
})
export class AppModule { }
