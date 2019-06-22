import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';

import { WeatherService } from 'src/app/services/weather.service';
import { Constants } from 'src/app/shared/Constants';
import { DayWeather } from 'src/app/shared/DayWeather.class';
import { City } from 'src/app/shared/City.class';
import { AddCity } from 'src/app/state/addCity.action';
import { AddForecast } from 'src/app/state/addForecast.action';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    public loading: boolean = true;

    constructor(public router: Router, private store: Store, public weatherService: WeatherService) {
        this.weatherService.getData(Constants.LONDON.NAME, Constants.LONDON.CODE)
        .subscribe((response: any) => {
            let noonDays = [];
            response.list.forEach(data => {
                let day = new DayWeather(data);
                if (day.isNoon) {
                    noonDays.push(day);
                }
            });
            this.addDataToStore(new City(response.city), noonDays);
            this.loading = false;
        });
    }

    ngOnInit() {
    }

    private addDataToStore(city: City, forecast: Array<DayWeather>) {
        this.store.dispatch([
            new AddCity(city),
            new AddForecast(forecast)
        ]).subscribe(() => console.log("city added"));
    }
}
