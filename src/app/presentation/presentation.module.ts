// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

// Components
import { LocationInputComponent } from './location-input';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    LocationInputComponent,

  ],
  exports: [
    LocationInputComponent
  ]
})
export class PresentationModule { }
