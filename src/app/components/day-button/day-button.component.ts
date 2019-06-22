import { Component, OnInit, Input } from '@angular/core';
import { DayWeather } from 'src/app/shared/DayWeather.class';

@Component({
    selector: 'day-button',
    templateUrl: './day-button.component.html',
    styleUrls: ['./day-button.component.scss']
})
export class DayButtonComponent implements OnInit {

@Input() data: DayWeather;

    constructor() { }

    ngOnInit() {
    }

}
