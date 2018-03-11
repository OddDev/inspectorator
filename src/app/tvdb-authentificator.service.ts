import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TvdbJwt } from './tvdb-jwt';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class TvdbAuthentificatorService {

  private _tvdbApiKey = '7088A83244EFDD6D';
  private _jwt: string;

  constructor(private http: HttpClient) {
    this._fillToken();
  }

  private _fillToken() {
    this._authenticate().subscribe(tokenResponse => {
      this._jwt = tokenResponse.token;
    });
  }

  private _authenticate(): Observable<TvdbJwt> {
    return this.http.post('/login', {
      apikey: this._tvdbApiKey
    }).pipe(
      // TODO set this to 3 again
      retry(0),
      catchError(this._handleError)
    );
  }

  get jwt(): string {
    return this._jwt;
  }

  private _handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };

}
