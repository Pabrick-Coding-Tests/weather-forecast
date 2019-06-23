import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Weather } from 'src/app/shared/Weather.class';
import { Constants } from 'src/app/shared/Constants';

@Component({
    selector: 'sky',
    templateUrl: './sky.component.html',
    styleUrls: ['./sky.component.scss']
})

export class SkyComponent implements OnInit, OnChanges {

    @Input() data: Weather;

    public skySun:string;
    public skyClouds:string;
    public skyMist:string;
    public skySnow:string;
    public skyRain:string;
    public skyDrizzle:string;
    public skyStorm:string;

    private skyMap = new Map();

    constructor() {
        this.skyMap.set(2, Constants.WEATHER.STORM);
        this.skyMap.set(3, Constants.WEATHER.DRIZZLE);
        this.skyMap.set(5, Constants.WEATHER.RAIN);
        this.skyMap.set(6, Constants.WEATHER.SNOW);
        this.skyMap.set(7, Constants.WEATHER.MIST);
        this.skyMap.set(8, Constants.WEATHER.CLOUDS);
        this.skySun = "sky-fade-in";
    }

    ngOnInit() {
        // this.changeSky("skyMist", "skySun");
    }
    
    ngOnChanges(changes: SimpleChanges) {
        let prevId = changes.data.isFirstChange() ? 700 : changes.data.previousValue.id;
        let newId = changes.data.currentValue.id;
        this.changeSky(this.getSkyWeatherFromCode(prevId), this.getSkyWeatherFromCode(newId));
    }

    private getSkyWeatherFromCode(id) {
        let weather = id === 800 ? Constants.WEATHER.SUN : this.skyMap.get(Math.floor(id/100))
        return `sky${weather}`;
    }

    private changeSky(oldWeather, newWeather) {
        this.hideAllSkies();

        this[oldWeather] = "sky-fade-out";
        this[newWeather] = "sky-fade-in";

        console.log("Out", oldWeather + " / " + this[oldWeather]);
        console.log("In", newWeather + " / " + this[newWeather]);
    }

    private hideAllSkies() {
        this[`sky${Constants.WEATHER.SUN}`] = "sky-hidden";
        this[`sky${Constants.WEATHER.CLOUDS}`] = "sky-hidden";
        this[`sky${Constants.WEATHER.MIST}`] = "sky-hidden";
        this[`sky${Constants.WEATHER.SNOW}`] = "sky-hidden";
        this[`sky${Constants.WEATHER.RAIN}`] = "sky-hidden";
        this[`sky${Constants.WEATHER.DRIZZLE}`] = "sky-hidden";
        this[`sky${Constants.WEATHER.STORM}`] = "sky-hidden";
    }

}
