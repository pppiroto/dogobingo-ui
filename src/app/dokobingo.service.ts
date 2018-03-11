import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from './user';
import { logging } from 'protractor';

const headers: HttpHeaders =  new HttpHeaders().set("Content-Type", "application/json");
  
@Injectable()
export class DokobingoService {
  helloResult: any;

  configureRequest(req: Request): void {
  }

  constructor(private http: HttpClient) { 
  }

  login(user: User){
    return this.http.post('/api/login_user',
      JSON.stringify({user}),
     {headers}
    );
  }

  createRoom(user: User){
    return this.http.post('/api/create_room',
      JSON.stringify({user}),
     {headers}
    );
  }
  
  hello(name: string) {
    // https://qiita.com/ponday/items/1ec0e500cd801286845e
    // https://blog.angular-university.io/angular-http/
    return this.http.post('/api/hello',
      JSON.stringify({ params: { name: name } }),
     {headers}
    );
  }
}
