import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather.model';
import * as moment from 'moment';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  today: Date = new Date();

  weather: Weather;

  forecast: Weather[];

  constructor(private service: WeatherService) { }

  ngOnInit(): void {
    this.service.getCurrentWeather()
      .subscribe(data => this.weather = data);

    this.service.getForecast()
      .subscribe(data =>  this.forecast = data);
  }

  getNextDay(index: number): string {
    return moment(this.today).add(index + 1, 'day').format('dddd');
  }
}
