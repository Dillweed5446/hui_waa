import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Geocode_configService } from '../../config/geocode_config/geocode_config.service';

@Injectable({
  providedIn: 'root'
})
export class GoogleGeocodeService {

  public setAddress(location: string): void {
    this.geo.setAddress(location);
  }

constructor(
  private http: HttpClient,
  private geo: Geocode_configService
  ) { }

}
