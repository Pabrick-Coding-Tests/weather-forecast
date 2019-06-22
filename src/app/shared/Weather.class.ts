import { Constants } from './Constants';

/**
 * @class Weather
 * @description Contains the most important weather
 */
export class Weather {
    public id: number;
    public icon: string;
    public description: string;
    public date: Date;
    public humidity: number;
    public pressure: number;
    public temperature: number;

    constructor(data) {
        this.id = data.weather ? data.weather[0].id : undefined;
        this.icon = data.weather ? data.weather[0].icon : undefined;
        this.description = data.weather ? data.weather[0].description : undefined;
        this.date = new Date(data.dt_txt);
        this.humidity = data.main ? data.main.humidity : undefined;
        this.pressure = data.main ? data.main.pressure : undefined;
        this.temperature = data.main ? data.main.temp : undefined;
    }

    get isNoon() {
        return this.date.getHours() === Constants.NOON;
    }
}