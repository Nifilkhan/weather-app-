import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpStatusCodes } from '../enums/http-status-codes';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  constructor() { }


  /**
 * Handles HTTP errors and returns a user-friendly error message.
 *
 * This function inspects the HTTP status code of the error response and returns
 * a relevant error message based on the status. If no specific message is defined
 * for the error code, a default error message with the status and error message is returned.
 */

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
