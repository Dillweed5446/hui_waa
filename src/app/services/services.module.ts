// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

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
  ]
})
export class ServicesModule { }
