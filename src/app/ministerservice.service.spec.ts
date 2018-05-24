import { TestBed, inject } from '@angular/core/testing';

import { MinisterService } from './ministerservice.service';

describe('MinisterserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MinisterService]
    });
  });

  it('should be created', inject([MinisterService], (service: MinisterService) => {
    expect(service).toBeTruthy();
  }));
});
