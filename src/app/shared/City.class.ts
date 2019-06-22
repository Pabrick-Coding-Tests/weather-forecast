/**
 * @class City
 */
export class City {
    public id: number;
    public name: string;
    public countryCode: string;

    constructor(city) {
        this.id = city.id;
        this.name = city.name;
        this.countryCode = city.country;
    }
}