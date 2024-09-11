import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { ErrorHandlingService } from './error-handling.service';
import { weatherModel } from '../model/weather.model';
@Injectable({
  providedIn: 'root',
})
export class WeatherServiceService {
  private WeatherApi = environment.apiUrl;
  private WeatherApiKey = environment.apiKey;

  constructor(private http: HttpClient,private ErrorHandler:ErrorHandlingService) {}

  getWeather(city: string) :Observable<weatherModel>{
    return this.http.get<weatherModel>(
      `${this.WeatherApi}?q=${city}&appid=${this.WeatherApiKey}&units=metric`
    ).pipe(
    catchError( error=> {
      return throwError(() => new Error(this.ErrorHandler.handleError(error)));
    })
  )
  }
}
