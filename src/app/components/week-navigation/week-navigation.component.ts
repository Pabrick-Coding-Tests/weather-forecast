import { Component, OnInit, Input } from '@angular/core';
import { DayWeather } from 'src/app/shared/DayWeather.class';

@Component({
    selector: 'week-navigation',
    templateUrl: './week-navigation.component.html',
    styleUrls: ['./week-navigation.component.scss']
})
export class WeekNavigationComponent implements OnInit {

@Input() forecast: [DayWeather];

    constructor() { }

    ngOnInit() {
    }

}
