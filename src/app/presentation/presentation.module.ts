// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

// Components
import { LocationInputComponent } from './location-input';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatRadioModule
  ],
  declarations: [
    LocationInputComponent,

  ],
  exports: [
    LocationInputComponent
  ]
})
export class PresentationModule { }
