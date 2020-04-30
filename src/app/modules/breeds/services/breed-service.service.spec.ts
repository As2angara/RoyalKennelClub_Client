import { TestBed } from '@angular/core/testing';

import { BreedServiceService } from './breed-service.service';

describe('BreedServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BreedServiceService = TestBed.get(BreedServiceService);
    expect(service).toBeTruthy();
  });
});
