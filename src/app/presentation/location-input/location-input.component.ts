import { Component, OnInit } from '@angular/core';

export interface LatitudeAndLongitude {
  lat: number;
  long: number;
}
@Component({
  selector: 'app-location-input',
  templateUrl: './location-input.component.html',
  styleUrls: ['./location-input.component.sass']
})
export class LocationInputComponent implements OnInit {

  public locationName: string = '';
  public locationLatLong: LatitudeAndLongitude = {lat: 0, long: 0}
  public locationInputString: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
