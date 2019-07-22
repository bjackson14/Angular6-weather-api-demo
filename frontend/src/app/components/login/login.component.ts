import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  loginError: Boolean; // Used for test to determine if error message should be displayed

  constructor(private loginService: LoginService, private router: Router, private formBuilder: FormBuilder) { 
    // Creates login form and adds validators
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // Set to false at start for no login error
    this.loginError = false;
  }

  ngOnInit() {
  }

  // Gets the login information
  getLogin(username: String, password: String) {
    // Gets login information based on username
    this.loginService.getLoginByUsername(username).subscribe((login: Login) => {
      // Sets response to login interface
      this.login = login;

      // Checks if the passwordin the interface is the same as password provided by user
      // If passwords do not match, sets error to true so html will display an error message
      if (this.login.password !== password)
        this.loginError = true;
      // If passwords match, routes user to latlng page
      else
        this.router.navigate(['/latlng']);
    });
  }

}
