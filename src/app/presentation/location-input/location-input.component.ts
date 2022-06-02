import { Component, OnInit } from '@angular/core';
import { GoogleGeocodeService } from '../../services/google-geocode/google-geocode.service';
import { LatitudeAndLongitude } from 'src/app/services/location-data-provider/location-data-provider.service';
import { LocationDataProviderService } from 'src/app/services/location-data-provider/location-data-provider.service';
@Component({
  selector: 'app-location-input',
  templateUrl: './location-input.component.html',
  styleUrls: ['./location-input.component.sass']
})
export class LocationInputComponent implements OnInit {

  public locationName: string = '';
  public locationLatLong: LatitudeAndLongitude = {lat: 0, long: 0}
  public locationInputString: boolean = true;

  constructor(
    private geo: GoogleGeocodeService,
    private locationService: LocationDataProviderService
  ) { }

  public submitLocation(): void {
    this.locationInputString ? (
      this.locationService.setLocation(this.locationName.split(' ').join('+'))
    ) : (
       this.locationService.setLocation(this.locationLatLong)
    )

    this.geo.getWeatherData();
    this.geo.weatherData.subscribe({next: data => console.log('weather', data)})
  }

  ngOnInit() {
  }

}
