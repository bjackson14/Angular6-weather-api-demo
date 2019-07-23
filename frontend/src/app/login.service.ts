import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri: String = 'http://localhost:3000'; // Uri with express server

  constructor(private http: HttpClient) { }

  // Returns the login information retrieved by the username
  getLoginByUsername(username: String): Observable<any> {
    return this.http.get<Login>(`${this.uri}/login/${username}`)
      .pipe(catchError(this.errorHandler));
  }

  // Adds new login information
  addLogin(username: String, password: String): Observable<any> {
    const login: Login = {
      username: username,
      password: password
    };
    return this.http.post<Login>(`${this.uri}/login/add`, login)
      .pipe(catchError(this.errorHandler));
  }

  // Throws error from http request
  errorHandler(err: HttpErrorResponse): Observable<HttpErrorResponse> {
    return throwError(err);
  }
}
