import { Component } from '@angular/core';

declare const hello;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  constructor() { 
    hello.init({
        facebook: '140868453294263',
        twitter: 'Pm5i79SC9PetmmiXrGeqZftfM'
    });
  }
  ngOnInit() {
  }
}
