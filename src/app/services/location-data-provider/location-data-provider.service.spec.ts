/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LocationDataProviderService } from './location-data-provider.service';

describe('Service: LocationDataProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationDataProviderService]
    });
  });

  it('should ...', inject([LocationDataProviderService], (service: LocationDataProviderService) => {
    expect(service).toBeTruthy();
  }));
});
