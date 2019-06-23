import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, Select } from '@ngxs/store';

import { Constants } from 'src/app/shared/Constants';
import { City } from 'src/app/shared/City.class';
import { Weather } from 'src/app/shared/Weather.class';

import { WeatherService } from 'src/app/services/weather.service';

import { AddCity } from 'src/app/state/addCity.action';
import { AddForecast } from 'src/app/state/addForecast.action';
import { WeatherState } from 'src/app/state/weather.state';
import { Observable } from 'rxjs';
import { AddCurrentWeather } from 'src/app/state/addCurrentWeather.action';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    public loading: boolean = true;
    
    @Select(WeatherState.getCity) city$: Observable<City>;
    @Select(WeatherState.getForecastNoon) forecast$: Observable<Weather[]>;
    @Select(WeatherState.getCurrentWeather) currentWeather$: Observable<Weather>;

    constructor(public router: Router, private store: Store, public weatherService: WeatherService) {
        this.weatherService.getData(Constants.LONDON.NAME, Constants.LONDON.CODE)
        .subscribe((response: any) => {
            let formattedForecast = response.list.map(element => new Weather(element));
            this.addDataToStore(new City(response.city), formattedForecast);
            this.loading = false;
        });
    }

    ngOnInit() {
    }

    private addDataToStore(city: City, forecast: Array<Weather>) {
        this.store.dispatch([
            new AddCity(city),
            new AddCurrentWeather(forecast[0]),
            new AddForecast(forecast)
        ]);
    }
}
