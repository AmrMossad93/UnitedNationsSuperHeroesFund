import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './Layouts/navbar/navbar.component';
import {AngularMaterialModule} from './DesignModules/angular-material.module';
import {HttpClientModule} from '@angular/common/http';
import {httpInterceptorProviders} from './Interceptors';
import {DatePipe} from '@angular/common';
import {NgxSpinnerModule} from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [httpInterceptorProviders, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
