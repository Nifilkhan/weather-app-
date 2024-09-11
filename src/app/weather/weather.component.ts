import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherServiceService } from '../services/weather-service.service';
import { CommonModule } from '@angular/common';
import { weatherModel } from '../model/weather.model';
import Swal from 'sweetalert2';
import { WeatherDisplayComponentComponent } from './weather-display-component/weather-display-component.component';
import { WeatherInputComponentComponent } from './weather-input-component/weather-input-component.component';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    WeatherDisplayComponentComponent,
    WeatherInputComponentComponent,
  ],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  cities: string[] = [
    'New York',
    'London',
    'Paris',
    'Tokyo',
    'Sydney',
    'Dubai',
    'Berlin',
    'Singapore',
    'Moscow',
    'Toronto',
    'Mumbai',
    'Hong Kong',
    'Cairo',
    'Bangkok',
    'Rio de Janeiro',
    'Istanbul',
    'Rome',
    'Mexico City',
    'Cape Town',
    'Beijing',
  ];
  city: string = this.cities[Math.floor(Math.random() * this.cities.length)];
  weatherData: weatherModel | null = null;
  isLoading: boolean = true;

  constructor(private weatherService: WeatherServiceService) {}

  ngOnInit(): void {
    this.getWeather(this.city);
  }


  /**
 * Fetches weather data for the given city and updates the component state.
 * 
 * @param city - City name to fetch weather data for.
 */

  getWeather(city: string) {
    this.isLoading = true;
    this.weatherService.getWeather(city).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        this.weatherData = null;
        this.showErrorPopup(err.message);
      },
    });
  }


  showErrorPopup(errorMessage: string) {
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: errorMessage,
      confirmButtonText: 'OK',
    });
  }

  refreshWeather() {
    if (this.city) {
      this.getWeather(this.city);
    }
  }

  updateCity(city: string) {
    this.city = city;
    this.refreshWeather();
  }
}
