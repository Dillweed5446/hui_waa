import { Injectable } from '@angular/core';
import { apiKeys } from '../../../../environment.js';

@Injectable({
  providedIn: 'root'
})
export class Geocode_configService {
  private address = '';

  private GOOGLE_GEOCODE = `https://maps.googleapis.com/maps/api/geocode/json?address=${this.address}&key=${apiKeys.GEOCODE_API}`


  public setAddress(address: string): void {
    this.address = address;
  }

  public getGeoCodeURL(): string {
    return this.GOOGLE_GEOCODE;
  }

constructor() { }

}
