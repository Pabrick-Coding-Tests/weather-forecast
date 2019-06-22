import { State, Action, StateContext, Selector } from '@ngxs/store';
import { WeatherStateModel } from './weather.state.model';
import { AddCity } from './addCity.action';
import { AddForecast } from './addForecast.action';
import { City } from '../shared/City.class';
import { DayWeather } from '../shared/DayWeather.class';

@State<WeatherStateModel>({
    name: 'weather',
    defaults: {
        city: new City({}),
        forecast: []
    }
})

export class WeatherState {
    @Selector()
    static getCity(state: WeatherStateModel) {
        return state.city;
    }
    static getDays(state: WeatherStateModel) {
        return state.forecast;
    }
    @Action(AddCity)
    addCity({ patchState }: StateContext<WeatherStateModel>, { payload }: AddCity) {
        patchState({
            city: payload
        });
    }
    @Action(AddForecast)
    addForecast({ patchState }: StateContext<WeatherStateModel>, { payload }: AddForecast) {
        patchState({
            forecast: payload
        });
    }
}
