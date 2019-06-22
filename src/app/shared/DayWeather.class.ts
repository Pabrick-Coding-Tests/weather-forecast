import { Constants } from './Constants';

/**
 * @class DayWeather
 * @description Contains the most important weather data from a 'day'
 */
export class DayWeather {
    public id: number;
    public icon: string;
    public description: string;
    public date: string;
    public hour: string;
    public humidity: number;
    public pressure: number;
    public temperature: number;

    constructor(data) {
        this.id = data.weather[0].id;
        this.icon = data.weather[0].icon;
        this.description = data.weather[0].description;
        this.date = data.dt_txt.split(" ")[0];
        this.hour = data.dt_txt.split(" ")[1];
        this.humidity = data.main.humidity;
        this.pressure = data.main.pressure;
        this.temperature = data.main.temp;
    }

    get isNoon() {
        return this.hour === Constants.NOON;
    }
}