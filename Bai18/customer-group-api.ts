import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { ICustomerGroup } from './interfaces/customer-group';

@Injectable({
  providedIn: 'root'
})
export class CustomerGroupApiService {
  private _url: string = "./assets/data/customers.json";

  constructor(private _http: HttpClient) { }

  getCustomerGroups(): Observable<Array<ICustomerGroup>> {
    return this._http.get<Array<ICustomerGroup>>(this._url)
      .pipe(
        retry(3),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message))
  }
}