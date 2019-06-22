import { Component, OnInit, Input } from '@angular/core';
import { City } from 'src/app/shared/City.class';
import { Weather } from 'src/app/shared/Weather.class';

@Component({
    selector: 'weather-info',
    templateUrl: './weather-info.component.html',
    styleUrls: ['./weather-info.component.scss']
})

export class WeatherInfoComponent implements OnInit {

    @Input() city: City;
    @Input() data: Weather;

    constructor() {
    }

    ngOnInit() {
    }

}
