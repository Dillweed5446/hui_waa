import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiKeys } from 'src/environments/environment';
import { LocationDataProviderService } from '../location-data-provider/location-data-provider.service';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GoogleGeocodeService {

  public weatherData = new BehaviorSubject<any>({});
  private location: string = '';
  private GOOGLE_GEOCODE_ROOT = `https://maps.googleapis.com/maps/api/geocode/json?${this.location}&key=${apiKeys.GEOCODE_API}`;

  private setLocationString(): void {
    this.location = this.locationService.getLocationType().concat(this.locationService.getLocation());
  }

  public getWeatherData(): void {
    this.setLocationString();
    this.weatherData.next(this.http.get(this.GOOGLE_GEOCODE_ROOT));
  }

constructor(
  private http: HttpClient,
  private locationService: LocationDataProviderService
  ) { }

}
