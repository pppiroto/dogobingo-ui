import { Component, OnInit } from '@angular/core';
import { SnsAccount } from '../sns-account.enum';

declare const hello;

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {
  testActions: string[] = ['','login','logout','check'];
  snsAccounts: string[] = [''];
  selectedAccount: string = null;
  selectedAction: string = null;

  constructor() {
    Object.keys(SnsAccount).forEach(x => this.snsAccounts.push(x));
  }
  ngOnInit() {
  }

  /**
   * SNS認証テスト用処理
   */
  doTestAction() {
    if (this.selectedAccount != null && this.selectedAction != null) {
      if (this.selectedAction == "login") {
        this.testSnsAccountLogin(this.selectedAccount);
      } else if (this.selectedAction == "logout") {
        this.testSnsAccountLogout(this.selectedAccount);
      } else if (this.selectedAction == "check") {
        this.testSnsAccountCheck(this.selectedAccount);
      } else {
        alert(`invalid option ${this.selectedAccount}/${this.selectedAction}`);
      }
    }
  }
 /**
   * SNS認証アカウントプルダウン変更
   * @param event 
   */
  selectChangeAccount(event) {
    this.selectedAccount = event.target.value;
  }
  /**
   * SNS認証アカウントテスト処理プルダウン変更
   * @param event 
   */
  selectChangeAction(event) {
    this.selectedAction = event.target.value;
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
   * SNS認証情報のログインテスト
   */
  testSnsAccountLogout(sns: string) {
    hello(sns).logout().then(function() {
      alert('Signed out');
    }, function(e) {
      alert(`Signed out error: ${e.error.message}`);
    });
  }
  /**
   * SNS認証情報の接続テスト
   */
  testSnsAccountCheck(sns: string) {
    hello(sns).api('me').then(function(json) {
      alert(`Your name is ${json.name}`);
    }, function(e) {
      alert(`Whoops! ${e.error.message}`);
    });
  }
}