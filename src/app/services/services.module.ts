// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// Services
import { GoogleGeocodeService } from './google-geocode/google-geocode.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [
    HttpClient,
  ]
})
export class ServicesModule { }
