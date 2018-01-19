import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';



import { NavbarComponent } from './components/navbar/navbar.component';
import { CityWeatherComponent } from './components/city-weather/city-weather.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { ErrorComponent } from './components/error/error.component';


const appRoutes: Routes = [
  { path: '', component: CityWeatherComponent },
  { path: 'city', component: CityWeatherComponent }, 
  { path: 'forecast', component: ForecastComponent },
 
  { path: '**', component: ErrorComponent }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule {

}