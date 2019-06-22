import { DayWeather } from '../shared/DayWeather.class';

export class AddForecast {
    static readonly type = "[Forecast] Add";
    constructor(public payload: Array<DayWeather>) {}
}