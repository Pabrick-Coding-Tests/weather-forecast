import { State, Action, StateContext, Selector } from '@ngxs/store';
import { WeatherStateModel } from './weather.state.model';
import { AddCity } from './addCity.action';
import { AddCurrentWeather } from './addCurrentWeather.action';
import { AddForecast } from './addForecast.action';
import { City } from '../shared/City.class';
import { Weather } from '../shared/Weather.class';

@State<WeatherStateModel>({
    name: 'weather',
    defaults: {
        city: new City({}),
        currentWeather: new Weather({}),
        forecast: []
    }
})

export class WeatherState {
    @Selector()
    static getCity(state: WeatherStateModel) {
        return state.city;
    }
    @Selector()
    static getCurrentWeather(state: WeatherStateModel) {
        return state.currentWeather;
    }
    @Selector()
    static getForecast(state: WeatherStateModel) {
        return state.forecast;
    }
    @Selector()
    static getForecastNoon(state: WeatherStateModel) {
        return state.forecast.filter(day => day.isNoon);
    }
    @Action(AddCity)
    addCity({ patchState }: StateContext<WeatherStateModel>, { payload }: AddCity) {
        patchState({
            city: payload
        });
    }
    @Action(AddCurrentWeather)
    addCurrentWeather({ patchState }: StateContext<WeatherStateModel>, { payload }: AddCurrentWeather) {
        patchState({
            currentWeather: payload
        });
    }
    @Action(AddForecast)
    addForecast({ patchState }: StateContext<WeatherStateModel>, { payload }: AddForecast) {
        patchState({
            forecast: payload
        });
    }
}
