import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable()
export class DokobingoService {
  helloResult: any;

  configureRequest(req: Request): void {
  }

  constructor(private http: HttpClient) { 
  }

  hello(name: string) {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");

    // https://qiita.com/ponday/items/1ec0e500cd801286845e
    // https://blog.angular-university.io/angular-http/
    return this.http.post('/api/hello',
      JSON.stringify({ params: { name: name } }),
     {headers}
    );
  }
}
