import { Weather } from '../shared/Weather.class';

export class AddCurrentWeather {
    static readonly type = "[Current Weather] Add";
    constructor(public payload: Weather) {}
}