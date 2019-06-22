import { City } from '../shared/City.class';

export class AddCity {
    static readonly type = "[City] Add";
    constructor(public payload: City) {}
}