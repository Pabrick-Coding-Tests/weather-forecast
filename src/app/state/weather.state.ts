import { State } from '@ngxs/store';

@State<string[]>({
  name: 'animals',
  defaults: []
})
export class WeatherState {}