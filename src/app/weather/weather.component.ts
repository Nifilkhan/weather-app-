import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherServiceService } from '../services/weather-service.service';
import { CommonModule } from '@angular/common';
import { weatherModel } from '../model/weather.model';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  city: string = 'trivandrum';
  weatherData!: weatherModel;
  isBoolean: boolean = false;

  constructor(private weatherService: WeatherServiceService) {}

  ngOnInit(): void {
    this.getWeather(this.city);
    
  }
  getWeather(city: string) {
    this.weatherService.getWeather(this.city).subscribe((data) => {
      this.weatherData = data;
      console.log(data);
    });
  }
  refreshWeather() {
    window.location.reload();
  }
  getRoundedTemp(temp: number): number {
    return Math.round(temp); // Rounds the temperature to the nearest integer
  }
}
