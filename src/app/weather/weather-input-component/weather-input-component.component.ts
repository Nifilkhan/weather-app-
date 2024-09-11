import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './weather-input-component.component.html',
  styleUrl: './weather-input-component.component.css',
})
export class WeatherInputComponentComponent {
  city: string = '';

  @Output() getweather = new EventEmitter<string>();

  onGetWeather() {
    if (this.city.trim()) {
      this.getweather.emit(this.city);
    }
  }
}
