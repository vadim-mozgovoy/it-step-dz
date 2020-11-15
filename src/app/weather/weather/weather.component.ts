import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  today: Date = new Date();

  weather: Weather;

  constructor(private service: WeatherService) { }

  ngOnInit(): void {
    this.service.getCurrentWeather()
      .subscribe(data => this.weather = data);
  }

}
