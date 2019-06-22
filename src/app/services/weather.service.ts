import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Constants } from '../shared/Constants';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    private urlForescast5:string = `${Constants.API_URL}forecast`;

    constructor (private http: HttpClient) {
    }

    /**
     * @method getData
     * @param cityName {string}
     * @param countryCode {string} (ISO 3166 country codes)
     * @return observable with data from API
     */
    public getData(cityName:string, countryCode:string): Observable<any> {
        return this.http.get<any>(`${this.urlForescast5}?q=${cityName},${countryCode}&APPID=${Constants.APP_ID}`);
    }

}