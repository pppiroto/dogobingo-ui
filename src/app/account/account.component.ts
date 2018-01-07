import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { SnsAccount } from '../sns-account.enum';
import { AccountService } from '../account.service';
import { User } from '../user';

declare const hello;

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [AccountService]
})

export class AccountComponent implements OnInit, OnDestroy {
  alerts: object[] = [];
  subscription: Subscription

  user: User;

  constructor(private router: Router, private accountService: AccountService) {
  }
  
  ngOnInit() {
    this.subscription = this.accountService.userChangeAnnounced$.subscribe((user:User) => {
      this.user = user;
    });  
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * SNS認証ログイン
   * 
   * @param sns 
   */
  login(sns:string) {
    this.accountService.snsAccountLogin(sns)
      .then(()=> {
        this.alerts.splice(0, this.alerts.length);
        // ログインユーザー情報の取得
        return this.accountService.getSnsLoginUserInfo();
      })
      .catch(e => {
        console.log(`B! ${sns} login error: ${e}`);
        this.alerts.push({
          type: 'warning',
          msg: `${sns} アカウントで、ログインできませんでした。`,
          timeout: 10000
        });
      })
      .then((user:User) => {
        // ログインユーザー情報の取得 成功
        this.router.navigate([""]);
        this.accountService.announceUserChange(user)
      })
      ;
  }
}