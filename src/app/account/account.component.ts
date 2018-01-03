import { Component, OnInit } from '@angular/core';

declare const hello;

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  /**
   * SNS認証情報のログインテスト
   */
  testSnsAccountLogin(sns: string) {
    hello(sns).login().then(function () {
      alert(`Signin in success ${sns}`);
    },function(e) {
      alert(`Signin in error ${e.error.message}`); 
    });
  }

  /**
   * SNS認証情報の接続テスト
   */
  testSnsAccountStatus(sns: string) {
    hello(sns).api('me').then(function(json) {
      alert('Your name is ' + json.name);
    }, function(e) {
      alert('Whoops! ' + e.error.message);
    });
  }
}
