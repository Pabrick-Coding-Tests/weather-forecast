import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WeatherService } from 'src/app/services/weather.service';
import { Constants } from 'src/app/shared/Constants';
import { DayWeather } from 'src/app/shared/DayWeather.class';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    public loading: boolean = true;

    constructor(public router: Router, public weatherService: WeatherService) {
        this.weatherService.getData(Constants.LONDON.NAME, Constants.LONDON.CODE)
        .subscribe((response: any) => {
            let list = [];
            response.list.forEach(data => {
                list.push(new DayWeather(data)); 
            });
            this.loading = false;              
            console.log("TCL: MainComponent -> constructor -> list", list)
        });
    }

    ngOnInit() {
    }
}
