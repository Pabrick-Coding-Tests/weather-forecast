import { Component, OnInit, Input } from '@angular/core';

import { Weather } from 'src/app/shared/Weather.class';

@Component({
    selector: 'week-navigation',
    templateUrl: './week-navigation.component.html',
    styleUrls: ['./week-navigation.component.scss']
})
export class WeekNavigationComponent implements OnInit {

    @Input() forecast: Weather[];

    constructor() {
    }

    ngOnInit() {
    }

}
