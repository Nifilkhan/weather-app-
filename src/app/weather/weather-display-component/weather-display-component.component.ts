import { Component, EventEmitter, Input, Output } from '@angular/core';
import { weatherModel } from '../../model/weather.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-display-component.component.html',
  styleUrl: './weather-display-component.component.css'
})
export class WeatherDisplayComponentComponent {

  @Input() weatherData:weatherModel | null = null;
  @Output() refresh = new EventEmitter<void>();
  
  refreshWeather() {
    this.refresh.emit();
  }
  
  /***
   * Round the temperature to the nearest integer
   */
  getRoundedTemp(temp: number): number {
    return Math.round(temp);
  }
}
