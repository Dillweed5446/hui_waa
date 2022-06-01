/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GoogleGeocodeService } from './google-geocode.service';

describe('Service: GoogleGeocode', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleGeocodeService]
    });
  });

  it('should ...', inject([GoogleGeocodeService], (service: GoogleGeocodeService) => {
    expect(service).toBeTruthy();
  }));
});
