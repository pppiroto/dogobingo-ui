import { Component, OnInit } from '@angular/core';
import { SnsAccount } from '../sns-account.enum';
declare const hello;

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  userName: string;

  constructor() { 
  }
  ngOnInit() {
    this.getLoginStatus();
  }

  /**
   * ユーザーのSNS認証ログイン状態の取得
   */
  getLoginStatus() {
    var self = this;
    this.userName = null; 

    var promise = this.getSnsUserInfoPromise(SnsAccount.facebook)
      .then(function(json:any){
        if (self.userName == null) self.userName = json.name;
      })
      .catch(function(e:any) { 
        return this.getSnsUserInfoPromise(SnsAccount.twitter);
      })
      .then(function(json:any){
        if (self.userName == null) self.userName = json.name;
      })
      .catch(function(e:any) { 
        self.userName = "Please login..."
      })
      ;
  }

  /**
   * ログインユーザー情報を取得
   * 
   * @param sns 
   */
  getSnsUserInfoPromise(sns:string) {
    return new Promise(
      function(resolve, reject) {
        hello(sns).api('me').then(
          function(json) {
            console.log(`B! ${sns} name:${json.name}`);
            resolve(json);
          }, 
          function(e) {
            console.log(`B! ${sns} error:${e.error.message}`);
            reject(e.error.message);
          }
        );  
      }
    );
  }
}
