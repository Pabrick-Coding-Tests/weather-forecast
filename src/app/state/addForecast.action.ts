import { Weather } from '../shared/Weather.class';

export class AddForecast {
    static readonly type = "[Forecast] Add";
    constructor(public payload: Weather[]) {}
}