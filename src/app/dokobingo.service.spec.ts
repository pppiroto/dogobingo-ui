import { TestBed, inject } from '@angular/core/testing';
import { DokobingoService } from './dokobingo.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestabilityRegistry } from '@angular/core/src/testability/testability';

// https://qiita.com/wamekukyouzin/items/15bd3676319b08f6bfcd
// http://www.syntaxsuccess.com/viewarticle/mocking-http-request-with-httpclient-in-angular
describe('DokobingoService', () => {
  let dokobingoService: DokobingoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DokobingoService
      ]
    });
    dokobingoService = TestBed.get(DokobingoService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('hello api', () => {
    let name = 'aaa';
    dokobingoService.hello(name)
    .subscribe(
      response => {
        console.log(response);
      });
    httpMock.expectOne('/api/hello').flush({"result":{"name":name+"123"}});

    httpMock.verify();
  });
});
