import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { LatlngComponent } from './components/latlng/latlng.component';

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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
