import { TestBed, inject } from '@angular/core/testing';

import { DokobingoService } from './dokobingo.service';
import { HttpClient, HttpHandler } from '@angular/common/http'

describe('DokobingoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DokobingoService, HttpClient, HttpHandler]
    });
  });

  it('hello api', inject([DokobingoService], (service: DokobingoService) => {
    expect(service).toBeTruthy();
  }));
});
