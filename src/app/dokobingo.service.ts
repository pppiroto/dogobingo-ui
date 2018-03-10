import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from './user';
import { logging } from 'protractor';

@Injectable()
export class DokobingoService {
  helloResult: any;

  configureRequest(req: Request): void {
  }

  constructor(private http: HttpClient) { 
  }

  createRoom(user: User){
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");
    return this.http.post('/api/create_room',
      JSON.stringify({user}),
     {headers}
    );
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
