import { Component, OnInit } from '@angular/core';
import { SnsAccount } from '../sns-account.enum';
import { AccountService } from '../account.service';
declare const hello;

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
  providers: [AccountService]

})
export class NaviComponent implements OnInit {
  userName: string;

  constructor(private accountService: AccountService) { 
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

    var promise = this.accountService.getSnsUserInfo(SnsAccount.facebook)
      .then((json:any) => {
        if (self.userName == null) self.userName = json.name;
      })
      .catch(e => {
        return this.accountService.getSnsUserInfo(SnsAccount.twitter);
      })
      .then((json:any) => {
        if (self.userName == null) self.userName = json.name;
      })
      .catch(e => { 
        self.userName = "Please login..."
      })
      ;
  }
}
