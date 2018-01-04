import { Component, OnInit } from '@angular/core';
import { SnsAccount } from '../sns-account.enum';
import { AccountService } from '../account.service';
import { DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';

declare const hello;

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
  providers: [AccountService]

})
export class NaviComponent implements OnInit {
  user: any;

  constructor(private accountService: AccountService) { 
  }
  ngOnInit() {
    
    // TODO: ログイン/ログアウトにより、ナビゲーションバーを更新させる
    console.log("NaviComponent ngOninit");

    this.getLoginStatus();
  }

  /**
   * ユーザーのSNS認証ログイン状態の取得
   */
  getLoginStatus() {
    var self = this;
    
    this.accountService.getSnsAccountLoginUser()
      .then((json:any) => self.user = json)
      .catch()
      ;
  }
}
