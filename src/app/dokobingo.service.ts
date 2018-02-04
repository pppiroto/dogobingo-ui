import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class DokobingoService {

  configureRequest(req: Request): void {
    
  }

  constructor(private http: HttpClient) { }

  hello(name: string){
    this.http.post('/api/hello',
      JSON.stringify({ params: { name: name } })
    ).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
}
