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

  public submitLocation(): void {
    // TODO: Below is basic, and doesn't do anything.  Once location service api is setup, use this to submit location to service.
    this.locationInputString ? this.locationName : this.locationLatLong;
  }

  ngOnInit() {
  }

}
