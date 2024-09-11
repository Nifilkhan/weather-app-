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

    /**
   * Event emitter to notify parent component when the user searches for a city.
   * Emits the current city name to the parent component.
   */

  @Output() getweather = new EventEmitter<string>();

  /**
   * Method to emit the current city name when the user clicks the search button.
   * This method is called when the search button is clicked.
   */
  onGetWeather() {
      this.getweather.emit(this.city);
  }
}
