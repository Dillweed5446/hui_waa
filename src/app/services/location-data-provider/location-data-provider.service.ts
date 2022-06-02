import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface LatitudeAndLongitude {
  lat: number;
  long: number;
}

@Injectable({
  providedIn: 'root'
})
export class LocationDataProviderService {

  private location: string | LatitudeAndLongitude  = '';

  public setLocation(location: string | LatitudeAndLongitude): void {
      this.location = location;
  }

  public getLocation(): string {
    if (typeof this.location === 'string') {
    return this.location
    }
    return this.location.lat.toString().concat(this.location.long.toString());
  }

  public getLocationType(): string {
    return typeof this.location === 'string' ? 'address=' : 'latlng=';
  }

constructor() {
}

}
