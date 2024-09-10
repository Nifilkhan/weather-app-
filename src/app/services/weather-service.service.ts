import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class WeatherServiceService {
  private WeatherApi = environment.apiUrl;
  private WeatherApiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getWeather(city: string) :Observable<any>{
    return this.http.get<any>(
      `${this.WeatherApi}?q=${city}&appid=${this.WeatherApiKey}&units=metric`
    ).pipe(
    catchError(error => {
      console.error('Error fetching weather data', error);
      return throwError(() => new Error('Error fetching weather data'));
    })
  )
  }
}
