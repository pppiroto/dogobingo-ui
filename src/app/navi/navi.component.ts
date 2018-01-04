import { Component, OnInit } from '@angular/core';

declare const hello;

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  userName: string = "TEST";
  constructor() { 
  }
  ngOnInit() {
    // // TODO
    // hello("facebook").api('me').then(function(json) {
    //   console.log(`B! ${json.name}`);
    //   this.userName = json.name;
    // }, function(e) {
    //   console.log(`B! ERROR`);
    //   this.userName = "ERROR";
    // });  
  }
}
