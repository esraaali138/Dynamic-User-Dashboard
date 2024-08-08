import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  errorMessage = '';

  constructor() { }
  handleError(httpErrorRespone: HttpErrorResponse) {
    if (httpErrorRespone.error instanceof ErrorEvent) {
      this.errorMessage = `An error occurred: ${httpErrorRespone.error.message}`;
    } else {
      this.errorMessage = `Server code: ${httpErrorRespone.status}, ${httpErrorRespone.message}`;
    }
    return this.errorMessage
  }
}


