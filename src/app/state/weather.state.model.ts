import { City } from '../shared/City.class';
import { Weather } from '../shared/Weather.class';

export interface WeatherStateModel {
    city: City,
    currentWeather: Weather;
    forecast: Weather[];
}