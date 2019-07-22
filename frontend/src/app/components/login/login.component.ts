import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';
import { Login } from '../../login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login;

  constructor(private loginService: LoginService, router: Router) { }

  ngOnInit() {
  }

  // Gets the login information
  getLogin(username: String, password: String) {
    this.loginService.getLoginByUsername(username).subscribe((login: Login) => {
      this.login = login;
    });
  }

}
