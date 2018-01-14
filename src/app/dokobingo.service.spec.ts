import { TestBed, inject } from '@angular/core/testing';

import { DokobingoService } from './dokobingo.service';

describe('DokobingoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DokobingoService]
    });
  });

  it('should be created', inject([DokobingoService], (service: DokobingoService) => {
    expect(service).toBeTruthy();
  }));
});
