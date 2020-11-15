import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from './weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey  = '51e6ed29c1428295426010898d99883c';

  private apiUrl =  'http://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) {
  }

  getCurrentWeather(loc: string = 'Lviv'): Observable<Weather>  {
    return this.http.get<Weather>(`${this.apiUrl}/weather?q=${loc}&units=metric&lang=ru&appid=${this.apiKey}`);
  }

  getForecast(loc: string = 'Lviv'): Observable<any>  {
    return this.http.get(`${this.apiUrl}/forecast?q=${loc}&appid=${this.apiKey}`);
  }

/*  getUv(lat: number, lon: number) {
    let startDate = Math.round(+moment(new Date()).subtract(1, 'week').toDate() / 1000);
    let endDate = Math.round(+moment(new Date()).add(1, 'week').toDate() / 1000);
    return this.http.get(`${this.apiUrl}/uvi/history?lat=${lat}&lon=${lon}&start=${startDate}&end=${endDate}&appid=${apiKey}`);
  }*/
}
