import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpStatusCodes } from '../enums/http-status-codes';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  constructor() { }

  handleError(error:HttpErrorResponse){
    let errorMessage = '';

    switch(error.status){
      case HttpStatusCodes.BadRequest:
        errorMessage = 'Bad request Check your Input';
        break;
      case HttpStatusCodes.NotFound:
        errorMessage = 'City not found. Please enter a valid city name.';
        break;
      case HttpStatusCodes.ServiceUnavailable:
        errorMessage = 'Service is currently unavailable. Please try again later.';
        break;
      case HttpStatusCodes.InternalError:
        errorMessage = 'Internal server error.';
        break;
      default:
        errorMessage = `Error: ${error.status} - ${error.message}`;
    }
    return errorMessage;
  }
}
