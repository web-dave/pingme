import { TestBed, inject } from '@angular/core/testing';

import { PingmeService } from './pingme.service';

describe('PingmeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PingmeService]
    });
  });

  it('should be created', inject([PingmeService], (service: PingmeService) => {
    expect(service).toBeTruthy();
  }));
});
