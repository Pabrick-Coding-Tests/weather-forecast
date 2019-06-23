import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';

import { AddCurrentWeather } from 'src/app/state/addCurrentWeather.action';

import { Weather } from 'src/app/shared/Weather.class';
import { Constants } from 'src/app/shared/Constants';

@Component({
    selector: 'day-button',
    templateUrl: './day-button.component.html',
    styleUrls: ['./day-button.component.scss']
})
export class DayButtonComponent implements OnInit {

    @Input() config: Weather;

    public date:string;
    public image:string;

    constructor(private store: Store) {
    }

    ngOnInit() {
        this.date = `${this.config.date.getDate()} ${Constants.MONTHS[this.config.date.getMonth()]}`;
        this.image = `${Constants.ICON_URL}${this.config.icon}.png`;
    }

    public onClick() {
        this.store.dispatch(new AddCurrentWeather(this.config));
    }
}
