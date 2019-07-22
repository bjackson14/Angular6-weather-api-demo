import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri: String = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Returns the login information retrieved by the username
  getLoginByUsername(username: String) {
    return this.http.get(`${this.uri}/login/${username}`);
  }

  // Adds new login information
  addLogin(username: String, password: String) {
    const login = {
      username: username,
      password: password
    };
    return this.http.post(`${this.uri}/login/add`, login);
  }
}
