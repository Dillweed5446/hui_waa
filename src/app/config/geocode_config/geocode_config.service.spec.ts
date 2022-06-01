/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Geocode_configService } from './geocode_config.service';

describe('Service: Geocode_config', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Geocode_configService]
    });
  });

  it('should ...', inject([Geocode_configService], (service: Geocode_configService) => {
    expect(service).toBeTruthy();
  }));
});
