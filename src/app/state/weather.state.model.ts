import { City } from '../shared/City.class';
import { DayWeather } from '../shared/DayWeather.class';

export interface WeatherStateModel {
    city: City,
    forecast: DayWeather[];
}