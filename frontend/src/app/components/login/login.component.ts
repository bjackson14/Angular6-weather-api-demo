import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { LoginService } from '../../login.service';
import { Login } from '../../login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login; // Interface to hold login ingormation retrieved from server
  loginForm: FormGroup; // Group for login form elements
  loginError: Boolean; // Used to check if there was an error in http request

  constructor(private loginService: LoginService, private router: Router, private formBuilder: FormBuilder) { 
    // Creates login form and adds validators
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // Initiaizes loginError to show no error
    this.loginError = false;
  }

  ngOnInit() {
  }

  // Gets the login information
  loginToSite(username: String, password: String) {
    // Gets login information based on username
    this.loginService.getLoginByUsername(username).subscribe((login: Login) => {
      // Sets response to login interface
      this.login = login;

      // Checks if the passwordin the interface is the same as password provided by user
      // If passwords match, routes user to latlng page
      if (this.login.password === password)
        this.router.navigate(['/latlng']);
      else
        this.loginError = true;
    },
    (err: HttpErrorResponse) => {
      this.loginError = true;
    });
  }

}
