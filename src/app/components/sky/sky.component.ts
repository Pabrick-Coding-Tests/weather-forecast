import { Component, OnInit, Input } from '@angular/core';
import { Weather } from 'src/app/shared/Weather.class';

@Component({
    selector: 'sky',
    templateUrl: './sky.component.html',
    styleUrls: ['./sky.component.scss']
})

export class SkyComponent implements OnInit {

    @Input() data: Weather;

    constructor() {
    }

    ngOnInit() {
    }

}
