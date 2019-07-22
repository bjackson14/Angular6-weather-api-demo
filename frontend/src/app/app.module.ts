import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LatlngComponent } from './components/latlng/latlng.component';
import { LoginService } from './login.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'latlng', component: LatlngComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LatlngComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
